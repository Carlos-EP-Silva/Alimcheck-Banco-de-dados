# PLANO DE TRABALHO 

| Nome do Projeto:       | AlimCheck -Sistema de Apoio à Segurança Alimentar Urbana           | 
|------------------------|--------------------------------------------|
| Versão                 | 2.0                                        | 
| Status                 | Em andamento                               |
| Executor principal     | Bruno Manoel Lemos Lima, Carlos Eduardo Parente da Silva, Cíntia Seixas Fontes, Chyntia Freitas Prestes, Nélio Tobias Jorio. |
| Coordenador do Projeto:| Edson de Araújo Silva                           |


## HISTÓRICO DE VERSÕES
|  Versão      | Descrição                          |   Autor   |  Data   |
|--------------|------------------------------------|-----------|---------|
| 1.0          | Elaboração do Plano de Trabalho    | Bruno Manoel Lemos Lima, Carlos Eduardo Parente da Silva, Cíntia Seixas Fontes, Chyntia Freitas Prestes, Nélio Tobias Jorio.          | 08/05/2025 |
| 2.0          | Alteração da estrutura do projeto | Bruno Manoel L. L. | 27/06/2025 |


# 1.	INTRODUÇÃO 

Este documento tem como objetivo apresentar o plano de trabalho para o desenvolvimento do sistema AlimCheck, detalhando as atividades iniciais do projeto, incluindo a definição dos requisitos, a organização da equipe, a modelagem de dados e os recursos necessários para sua implementação. Ele se destina à equipe responsável pelo desenvolvimento do sistema e ao docente da disciplina de Banco de Dados I, servindo como referência técnica e gerencial ao longo do ciclo de vida do projeto.

O AlimCheck é uma aplicação web responsiva voltada à segurança alimentar urbana, cujo propósito é permitir que cidadãos de Itacoatiara-AM avaliem estabelecimentos alimentícios com base em suas experiências reais. A plataforma visa suprir a carência de ferramentas públicas e acessíveis para fiscalização sanitária colaborativa, promovendo transparência, participação popular e valorização das boas práticas nos serviços de alimentação.

Este plano pode ser ajustado conforme o avanço do projeto, incorporando novos elementos, revisões de cronograma ou mudanças de escopo, de acordo com as necessidades identificadas durante as fases de análise, modelagem e implementação. Para fins de padronização, siglas como SGBD (Sistema Gerenciador de Banco de Dados) ou CRUD (Create, Read, Update, Delete) poderão ser utilizadas ao longo do documento quando necessário. 

## 1.1	Objeto 

  O projeto AlimCheck tem como objetivo o desenvolvimento de uma aplicação web responsiva voltada à promoção da segurança alimentar urbana no município de Itacoatiara-AM. O sistema será desenvolvido para permitir que cidadãos avaliem estabelecimentos alimentícios com base em suas experiências, por meio de comentários e notas públicas. Com isso, busca-se ampliar o controle social sobre as condições sanitárias desses locais, incentivando boas práticas por parte dos comerciantes e oferecendo à população informações confiáveis para escolhas mais seguras no consumo de alimentos.

O problema central a ser enfrentado é a ausência de mecanismos digitais acessíveis que permitam à comunidade participar ativamente da fiscalização sanitária de bares, lanchonetes, restaurantes e outros pontos de alimentação. A plataforma pretende preencher essa lacuna ao oferecer funcionalidades de cadastro de usuários e estabelecimentos, sistema de avaliações, denúncias, filtros de busca, e rankings por reputação sanitária.
 

## 1.2	Motivação, justificativa e oportunidade 

  A motivação para o desenvolvimento do sistema AlimCheck surge da carência de mecanismos acessíveis que permitam à população participar ativamente da fiscalização sanitária de estabelecimentos alimentícios. Em cidades como Itacoatiara-AM, essa participação é limitada, o que dificulta a identificação de locais inseguros para o consumo de alimentos.

Justifica-se o projeto pela necessidade de uma ferramenta simples, pública e colaborativa que promova a conscientização coletiva, incentive boas práticas e ofereça maior transparência à comunidade. A oportunidade está em aliar tecnologia e engajamento social para melhorar a saúde pública por meio do consumo consciente e da valorização de estabelecimentos que seguem normas sanitárias.

 
## 1.3.1	Caracterização do Projeto 

| Classe          | Detalhamento |
|-----------------|--------------|
| Sistema web     | O projeto será desenvolvido como um sistema web. No front-end, utilizaremos HTML e CSS. No back-end, empregaremos Node.js com Express.js.|

## 1.3.2	Enquadrabilidade 

| Enquadrabilidade          | Detalhamento |
|---------------------------|--------------|
| Aplicativo público        | O aplicativo segue as regulamentações da (Lei Geral de Proteção de Dados) LGPD garantido os dados dos usuários sejam coletados, armazenados e processados de forma segura.  |
 
## 1.3.3  Tipo

| Tipo                         | Detalhamento |
|------------------------------|--------------|
| Documentação de software     | Levantamento de requisitos, especificação de funcionalidade, modelagem do sistema, implementação de interfaces. |

# 2. INFORMAÇÕES GERAIS

  A criação do sistema AlimCheck tem como objetivo fornecer uma ferramenta acessível e colaborativa para avaliação de estabelecimentos alimentícios, promovendo a segurança alimentar urbana. O projeto se baseia na participação ativa dos cidadãos, permitindo que compartilhem suas experiências de consumo. Um modelo estruturado como esse contribui para a conscientização da população e incentiva melhorias nos padrões sanitários locais, beneficiando consumidores, comerciantes e a saúde pública em geral. 

## 2.1	Objetivo 

  O principal objetivo é criar uma plataforma colaborativa que permita aos cidadãos avaliar estabelecimentos alimentícios com base em critérios sanitários, incentivando práticas seguras de consumo. Além disso, o sistema deve oferecer uma interface acessível para que os usuários possam visualizar avaliações, realizar denúncias e consultar rankings, fortalecendo a participação comunitária na promoção da saúde pública.

## 2.2	Escopo Geral 

  O escopo do sistema AlimCheck compreende o desenvolvimento de funcionalidades essenciais voltadas à segurança alimentar urbana. Primeiramente, o cadastro de usuários e estabelecimentos alimentícios, permitindo que cidadãos e comerciantes utilizem a plataforma de forma personalizada. Em seguida, o sistema oferecerá recursos para avaliação pública de estabelecimentos, incluindo notas, comentários e registros de denúncias sanitárias.

Além disso, serão implementados filtros de busca por localização, tipo de estabelecimento e média de avaliações, com o objetivo de facilitar o acesso às informações mais relevantes para os usuários. A plataforma também permitirá a geração de rankings baseados nas avaliações coletivas e contará com uma interface web responsiva, compatível com diferentes dispositivos. O projeto não contempla, nesta fase, integração com sistemas governamentais ou aplicativos móveis nativos.
 

## 2.2.1	Escopo Específico 

  O sistema permitirá o cadastro de estabelecimentos locais com informações detalhadas, como nome, tipo, endereço e dados de contato. Esses dados ficarão disponíveis para visualização pública, possibilitando que os usuários conheçam os locais cadastrados e acessem suas respectivas avaliações.

Será implementado um sistema de avaliação que permitirá aos usuários registrar notas e comentários com base em suas experiências. Além disso, a plataforma contará com um mecanismo de alerta para indicar problemas sanitários, como falta de higiene, alimentos vencidos ou armazenamento inadequado, permitindo uma resposta mais rápida da comunidade e dos órgãos fiscalizadores.

A busca por estabelecimentos será facilitada com filtros por tipo de local (restaurantes, lanchonetes, padarias etc.), avaliação média dos usuários e localização. Essa funcionalidade proporcionará uma experiência mais personalizada e eficiente na escolha de locais seguros para o consumo.

A interface do sistema será desenvolvida com foco em acessibilidade, sendo responsiva para diferentes tamanhos de tela e intuitiva para usuários de perfis variados, desde jovens familiarizados com tecnologia até pessoas com pouca experiência digital. O objetivo é garantir o uso amplo da plataforma por toda a comunidade local.
Com base nos dados coletados, o sistema permitirá a geração de rankings e relatórios, oferecendo uma visão geral sobre os estabelecimentos mais bem avaliados e os que mais receberam denúncias. Isso incentivará melhorias nos serviços prestados e promoverá um ambiente alimentar mais seguro para todos.
 

## 2.2.2	Escopo Negativo 

  A plataforma não incluirá nenhum tipo de controle governamental ou integração direta com órgãos de fiscalização sanitária. Sua função será exclusivamente informativa e colaborativa, voltada à participação da comunidade na avaliação dos estabelecimentos, sem caráter oficial ou normativo.

Também não fará parte do escopo funcionalidades relacionadas à venda ou compra de produtos alimentícios, nem integrações com sistemas de pagamento. Consequentemente, o sistema não armazenará dados bancários, informações sensíveis de usuários ou qualquer tipo de transação financeira, mantendo o foco na segurança dos dados e na simplicidade da proposta.

O projeto também não prevê integração com APIs externas, sistemas de marketing, personalização visual avançada ou suporte multilíngue. A interface será padronizada em português, mantendo o foco na funcionalidade essencial e no uso comunitário local.
  

## 2.3 Ambiente de Desenvolvimento

### Ferramentas e Tecnologias

| Tipo                                    | Modelo e Especificações               |
|:---------------------------------------:|:-------------------------------------:|
| Repositório Online                      | Github                                |
| Editor e criador de imagens e interfaces| Figma                                 |
| Editor de código fonte                  | Visual Studio Code                    |
| Modelagem                               | BR Modelo Web             |
| Linguagens de marcação e estilização    | HTML 5 e CSS 3                        |
| Linguagens de Programação               | JavaScript                   |
| Banco de dados                          | MySQL                                 |


## 2.4 Características Inovadoras do Projeto  

- Envolvimento direto da comunidade na melhoria dos serviços de alimentação; 
- Avaliações colaborativas como forma de fiscalização indireta;
- Permitir o envio de arquivos como fotos de exames ou prescrições médicas; 
- Aplicativo centrado em regiões de menor cobertura tecnológica; 
- Visual simplificado e acessível mesmo para usuários com pouca familiaridade digital.

## 2.5	Resultados Esperados 

- Aplicativo funcional com interface intuitiva para Android; 
- Base inicial com estabelecimentos cadastrados e avaliados;
- Envolvimento da população local no uso da plataforma; 
- Repositório GitHub com documentação clara e completa;
- Slides de apresentação e quadros de planejamento publicados. 

 

# 3. METODOLOGIA DE PROJETO 

## 3.1	Estrutura do Projeto 
- PO – Product Owner 
- Scrum Master 
- Squad: Avaliador de inspeção, modelador, analista de requisitos e designer UX/UI 

## 3.2	Equipe de Projeto: Papéis e Responsabilidades dos integrantes 
| Cargo | Profissional     | Responsabilidade                    |
|------------------|------------------|----------------------
| Scrum Master     | Bruno Manoel Lemos L.      | Organização geral do trabalho, revisão técnica e formatação.                     |
| Analista de Requisitos | Chyntia F. Prestes | Elaboração do Plano de Trabalho.                   |
| Arquiteto de Dados     | Nélio Tobias  | Criação do Modelo Conceitual e definição de Entidade e Relacionamentos.                      |
| Designer de Banco de Dados        | Cíntia Fontes       | Construção do Modelo Lógico e normalização das tabelas.                      |
| Administrador de Banco de Dados | Carlos Eduardo | Desenvolvimento do Modelo Físico e definição dos Sprints e SQL.                   |


## 3.3	Fases, Atividades e Cronograma 

- Fase I: Especificação e Planejamento – Maio/Junho:  
Levantamento de requisitos funcionais e não funcionais, regras de negócio, desenvolvimento do Modelo Conceitual (Entidade Relacionamento), Lógico (Relacional) e Físico (Sprint para SGBD).
- Fase II: Desenvolvimento Parcial – Junho/Julho: Sistema implementado com conexão com o banco de dados.


## 3.4	Entregas de cada Fase 

| Fase                           | Mês      | Entregável                                                    |
|--------------------------------|----------|---------------------------------------------------------------|
| I. Especificação e Planejamento               | 26/05    | Documento contendo os requisitos e regras de negócios e Diagramas, conceitual (Entidade Relacionamento), lógico (Relacional) e físico (Sprint para o SGBD). |
| II. Implementação do Banco de Dados                   | 02/07    | Sistema implementado com conexão com o banco de dados.|
 

## 3.5	Controle de Mudanças 

O monitoramento e controle do escopo do projeto serão realizados a partir das seguintes diretrizes: 
- Requisitos do projeto devem ser compreendidos por todos os membros da equipe.
- Todas as questões técnicas, de entregas e do cronograma que a equipe do projeto possui devem ser respondidas. 
- Todas as entregas devem ser acordadas pela equipe do projeto e entidades parceiras. 
- Todas as informações devem estar atualizadas no escopo e não-escopo. 
- Nenhum trabalho fora do escopo do projeto deve ser feito. 
- Solicitações de mudança no escopo do projeto devem ser efetivamente comunicadas e compreendidas.


# 4 Requisitos
## 4.1 Requisitos Funcionais
| ID     | RF  | Detalhamento | Prioridade|
| -------| --- | ------------ | --------- |
| RF-001  | Cadastro/login de usuários e estabalecimentos  |  Permitir criação e autenticação de contas para usuários e responsáveis por estabelecimentos, com gerenciamento de perfis e segurança de acesso.    | Alta  |
| RF-002  | Listagem, pesquisa e filtro de estabeleciemntos.               | Exibir todos os estabelecimentos cadastrados, com opções de busca por nome, tipo, localização e média de avaliação.                  | Alta  |
| RF-003  | Sistema de avaliações, comentários e notas de usuários.             | Habilitar usuários para avaliar estabelecimentos com notas e comentários, garantindo uma média publica atualizada.                          | Alta  |
| RF-004  | Visualiação do histórico de avaliações e rankings dos estabelecimentos.      | Apresentar o histórico de avaliações realizadas e gerar rankings com base nas notas recebidas pelos estabelecimentos             | Média  |
| RF-005  | Painel administrativo para monitoramento e bloqueio de avaliações inadequadas.                | Disponibilizar área restrita para moderação de conteúdo, revisão de denúncias e bloqueio de avaliações indevidas ou ofensivas.                                 | Média |


## 4.2 Requisitos Não Funcionais
| ID     | RF  | Detalhamento | Prioridade|
| -------| --- | ------------ | --------- |
| RF-001  | Plataforma web responsiva.  |  O sistema deverá adaptar-se a diferentes dispositivos e tamanhos de tela, como celulares e tablets.    | Alta  |
| RF-002  | Proteção contra spam e avaliações falsas.               | Implementar mecanismos de verificação e restrição para evitar registros repetidos ou avaliações indevidas.                  | Alta  |
| RF-003  | Auditoria e integridade dos dados.             | Garantir que os dados do sistema sejam confiáveis, com rastreamento de alterações e controle de acessos.                          | Média  |
| RF-004  | Backup diário dos dados.      | Realizar cópias de segurança automáticas diariamente para prevenir perda de informações.             | Média  |


## 4.3 Regras de Negócios
| ID     | RF  | Detalhamento | Prioridade|
| -------| --- | ------------ | --------- |
| RN-001  | Apenas usuários cadastrados podem avaliar estabelecimentos.  |  A avaliação de estabelecimentos estará restrita a usuários com conta ativa e autenticada no sistema.    | Alta  |
| RN-002  | Cada avaliação só pode ser feita uma vez por estabelecimento a cada 30 dias por usuário.               | O sistema deverá bloquear novas avaliações do mesmo usuário em um mesmo estabelecimento antes de 30 dias.                  | Alta  |
