const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('./db');
const { verificarToken } = require('./middleware/auth'); // Importando o middleware

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ROTA DE CADASTRO
app.post('/api/auth/cadastro', async (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    if (!nome || !email || !senha || !tipo) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios: nome, email, senha e tipo.' });
    }
    const tipoValido = tipo.toLowerCase();
    if (!['cliente', 'dono_estabelecimento', 'admin'].includes(tipoValido)) {
        return res.status(400).json({ erro: `O tipo de usuário '${tipo}' é inválido.` });
    }
    try {
        const senhaHash = await bcrypt.hash(senha, 10);
        const queryUsuario = 'INSERT INTO usuarios (nome, email, senha_hash, tipo) VALUES (?, ?, ?, ?)';
        db.query(queryUsuario, [nome, email, senhaHash, tipoValido], (err, results) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ erro: 'Este email já está em uso.' });
                console.error("ERRO ao inserir em usuarios:", err);
                return res.status(500).json({ erro: 'Erro interno ao cadastrar o usuário.' });
            }
            const novoUsuarioId = results.insertId;
            let queryPerfil = '';
            switch (tipoValido) {
                case 'cliente':
                    queryPerfil = 'INSERT INTO clientes (usuario_id) VALUES (?)';
                    break;
                case 'dono_estabelecimento':
                    queryPerfil = 'INSERT INTO donos_estabelecimento (usuario_id) VALUES (?)';
                    break;
                case 'admin':
                    queryPerfil = 'INSERT INTO administradores (usuario_id) VALUES (?)';
                    break;
                default:
                    return res.status(400).json({ message: 'Tipo de perfil inválido para criação.' });
            }
            db.query(queryPerfil, [novoUsuarioId], (errPerfil, resultsPerfil) => {
                if (errPerfil) {
                    console.error(`ERRO ao criar perfil de ${tipoValido}:`, errPerfil);
                    return res.status(500).json({ erro: `Usuário base criado, mas falha ao criar o perfil de ${tipoValido}.` });
                }
                return res.status(201).json({ message: `Usuário e perfil de ${tipoValido} criados com sucesso!` });
            });
        });
    } catch (error) {
        console.error('ERRO GERAL no bloco try/catch:', error);
        return res.status(500).json({ erro: 'Erro interno fatal durante o cadastro.' });
    }
});

// ROTA DE LOGIN
app.post('/api/auth/login', (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ erro: 'Email e senha são obrigatórios.' });
    }
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro interno no servidor.' });
        if (results.length === 0) return res.status(401).json({ erro: 'Credenciais inválidas.' });
        
        const usuario = results[0];
        const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
        if (!senhaValida) {
            return res.status(401).json({ erro: 'Credenciais inválidas.' });
        }
        
        const payload = { id: usuario.id, nome: usuario.nome, tipo: usuario.tipo };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
        res.json({
            mensagem: "Login bem-sucedido!",
            usuario: payload,
            token
        });
    });
});

// ROTA PARA BUSCAR USUÁRIOS
app.get('/api/usuarios', (req, res) => {
    const { pesquisa } = req.query;
    let sql = 'SELECT id, nome, email, tipo FROM usuarios';
    const params = [];
    if (pesquisa) {
        sql += ' WHERE nome LIKE ? OR email LIKE ?';
        params.push(`%${pesquisa}%`);
        params.push(`%${pesquisa}%`);
    }
    db.query(sql, params, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar usuários' });
        res.json(results);
    });
});

// ROTA DE ESTABELECIMENTOS
app.get('/api/estabelecimentos', (req, res) => {
    const { categoria, pesquisa } = req.query;
    let sql = `
      SELECT
        e.id, e.nome, e.endereco, c.nome as categoria, e.dono_id, e.imagem_url as imagem,
        AVG(a.nota) as nota_media,
        COUNT(a.id) as total_avaliacoes
      FROM estabelecimentos AS e
      JOIN categorias AS c ON e.categoria_id = c.id
      LEFT JOIN avaliacoes AS a ON e.id = a.estabelecimento_id
    `;
    const params = [];
    const whereClauses = [];
    if (categoria) {
        whereClauses.push('c.nome = ?');
        params.push(categoria);
    }
    if (pesquisa) {
        whereClauses.push('e.nome LIKE ?');
        params.push(`%${pesquisa}%`);
    }
    if (whereClauses.length > 0) {
        sql += ' WHERE ' + whereClauses.join(' AND ');
    }
    sql += ' GROUP BY e.id ORDER BY nota_media DESC, total_avaliacoes DESC';
    db.query(sql, params, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar estabelecimentos' });
        res.json(results);
    });
});

app.get('/api/estabelecimentos/dono/:donoId', (req, res) => {
    const sql = 'SELECT id, nome, endereco, categoria_id, dono_id, imagem_url as imagem FROM estabelecimentos WHERE dono_id = ? ORDER BY id DESC';
    db.query(sql, [req.params.donoId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro interno ao buscar dados.' });
        res.status(200).json(results);
    });
});

app.get('/api/estabelecimentos/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT e.id, e.nome, e.endereco, e.dono_id, e.imagem_url as imagem, c.nome as categoria 
        FROM estabelecimentos as e
        JOIN categorias as c ON e.categoria_id = c.id
        WHERE e.id = ?
    `;
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro no servidor.' });
        if (results.length === 0) return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
        res.json(results[0]);
    });
});

app.post('/api/estabelecimentos', (req, res) => {
    const { nome, endereco, categoria_id, dono_id } = req.body;
    if (!nome || !endereco || !categoria_id || !dono_id) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    const sql = 'INSERT INTO estabelecimentos (nome, endereco, categoria_id, dono_id) VALUES (?, ?, ?, ?)';
    const params = [nome, endereco, categoria_id, dono_id];
    db.query(sql, params, (err, result) => {
        if (err) return res.status(500).json({ error: "Erro ao salvar no banco de dados." });
        res.status(201).json({ id: result.insertId, message: 'Estabelecimento cadastrado com sucesso!' });
    });
});

app.put('/api/estabelecimentos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, endereco, categoria_id } = req.body;
    if (!nome || !endereco || !categoria_id) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    const sql = "UPDATE estabelecimentos SET nome = ?, endereco = ?, categoria_id = ? WHERE id = ?";
    db.query(sql, [nome, endereco, categoria_id, id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao atualizar.' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
        res.json({ message: 'Estabelecimento atualizado com sucesso!' });
    });
});

// ROTA DE CATEGORIAS
app.get('/api/categorias', (req, res) => {
    const sql = 'SELECT id, nome FROM categorias ORDER BY nome ASC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar categorias' });
        res.json(results);
    });
});

// ROTAS DE AVALIAÇÕES
app.get('/api/avaliacoes', (req, res) => {
    const { usuarioId, estabelecimentoId } = req.query;
    if (!usuarioId && !estabelecimentoId) {
        return res.status(400).json({ error: 'É necessário fornecer um ID.' });
    }
    let sql = `
      SELECT
        a.id, a.nota, a.comentario, a.created_at, a.estabelecimento_id,
        e.nome AS nomeEstabelecimento, e.imagem_url AS imagemEstabelecimento,
        u.nome AS nomeUsuario
      FROM avaliacoes AS a
      LEFT JOIN estabelecimentos AS e ON a.estabelecimento_id = e.id
      LEFT JOIN usuarios AS u ON a.usuario_id = u.id
    `;
    const params = [];
    if (usuarioId) {
        sql += ' WHERE a.usuario_id = ?';
        params.push(usuarioId);
    } else if (estabelecimentoId) {
        sql += ' WHERE a.estabelecimento_id = ?';
        params.push(estabelecimentoId);
    }
    sql += ' ORDER BY a.created_at DESC';
    db.query(sql, params, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar avaliações.' });
        res.status(200).json(results);
    });
});

app.get('/api/avaliacoes/verificar', (req, res) => {
    const { usuarioId, estabelecimentoId } = req.query;
    if (!usuarioId || !estabelecimentoId) {
        return res.status(400).json({ error: 'IDs de usuário e estabelecimento são necessários.' });
    }
    const sql = `SELECT created_at FROM avaliacoes WHERE usuario_id = ? AND estabelecimento_id = ? ORDER BY created_at DESC LIMIT 1`;
    db.query(sql, [usuarioId, estabelecimentoId], (err, results) => {
        if (err) {
            console.error("ERRO DETALHADO NA VERIFICAÇÃO:", err);
            return res.status(500).json({ 
                message: 'Erro no servidor ao verificar avaliações.',
                error_details: err 
            });
        }
        if (results.length === 0) {
            return res.json({ podeAvaliar: true });
        }
        const ultimaAvaliacao = new Date(results[0].created_at);
        const hoje = new Date();
        const diffTime = Math.abs(hoje - ultimaAvaliacao);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays >= 30) {
            return res.json({ podeAvaliar: true });
        } else {
            const diasRestantes = 30 - Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return res.json({ podeAvaliar: false, diasRestantes: diasRestantes });
        }
    });
});

// --- ROTA DE CRIAÇÃO DE AVALIAÇÃO CORRIGIDA E SEGURA ---
app.post('/api/avaliacoes', verificarToken, (req, res) => {
    // O ID do usuário vem do token de forma segura
    const usuario_id = req.usuario.id;
    // O resto dos dados vem do corpo da requisição
    const { estabelecimento_id, nota, comentario } = req.body;

    console.log(`--- TENTATIVA DE SALVAR AVALIAÇÃO ---`);
    console.log(`Usuário ID: ${usuario_id}, Estabelecimento ID: ${estabelecimento_id}, Nota: ${nota}`);

    // Validação dos dados recebidos
    if (!estabelecimento_id || !nota) {
        console.log("-> ERRO: Dados inválidos recebidos.");
        return res.status(400).json({ error: 'Dados inválidos. ID do estabelecimento e nota são obrigatórios.' });
    }

    // Lógica de cooldown de 30 dias
    const checkSql = `SELECT created_at FROM avaliacoes WHERE usuario_id = ? AND estabelecimento_id = ? ORDER BY created_at DESC LIMIT 1`;
    db.query(checkSql, [usuario_id, estabelecimento_id], (err, results) => {
        if (err) {
            console.error("-> ERRO ao verificar cooldown:", err);
            return res.status(500).json({ error: 'Erro no servidor ao checar avaliações existentes.' });
        }
        if (results.length > 0) {
            const ultimaAvaliacao = new Date(results[0].created_at);
            const agora = new Date();
            const diffEmDias = (agora - ultimaAvaliacao) / (1000 * 60 * 60 * 24);
            if (diffEmDias < 30) {
                const diasRestantes = Math.ceil(30 - diffEmDias);
                console.log(`-> BLOQUEADO: Cooldown ativo. Dias restantes: ${diasRestantes}`);
                return res.status(403).json({ error: `Você já avaliou este local. Tente novamente em ${diasRestantes} dia(s).` });
            }
        }

        // Inserção da nova avaliação no banco
        console.log("-> TENTANDO INSERIR no banco de dados...");
        const insertSql = 'INSERT INTO avaliacoes (usuario_id, estabelecimento_id, nota, comentario) VALUES (?, ?, ?, ?)';
        const params = [usuario_id, estabelecimento_id, nota, comentario || null];
        db.query(insertSql, params, (err, result) => {
            if (err) {
                console.error("-> ERRO AO INSERIR AVALIAÇÃO:", err);
                return res.status(500).json({ error: 'Erro ao salvar avaliação no banco de dados.' });
            }
            console.log("-> SUCESSO: Avaliação inserida com ID:", result.insertId);
            res.status(201).json({ message: 'Avaliação registrada com sucesso.' });
        });
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});