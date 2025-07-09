# AlimCheck-Banco-de-dados

![Status](https://img.shields.io/badge/status-em%20andamento-green)
![Versão](https://img.shields.io/badge/versão-2.0-blue)
![Tecnologia](https://img.shields.io/badge/backend-Node.js-lightgrey)
![Licença](https://img.shields.io/badge/licença-MIT-brightgreen)

Trabalho prático da disciplina de Banco de Dados I.

## 📝 Proposta do Projeto

O **AlimCheck** é uma aplicação web projetada para apoiar a segurança alimentar urbana por meio da participação comunitária.

Este projeto tem como objetivo principal documentar e desenvolver uma solução colaborativa para que cidadãos de Itacoatiara-AM possam avaliar estabelecimentos alimentícios com base em suas experiências, promovendo boas práticas sanitárias. A proposta envolve a criação de um sistema acessível, responsivo e intuitivo, que contribua para a transparência e melhoria das condições de higiene em espaços de alimentação coletiva.

## 📖 Índice

- [Objetivos](#-objetivos)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Cronograma do Projeto](#️-cronograma-do-projeto)
- [Requisitos Detalhados](#-requisitos-detalhados)
- [Equipe e Coordenação](#-equipe-e-coordenação)
- [Como Contribuir](#-como-contribuir)

## 🎯 Objetivos

### Objetivo Geral
Desenvolver uma aplicação web responsiva que permita aos cidadãos de Itacoatiara-AM avaliar estabelecimentos alimentícios com base em suas experiências, promovendo a segurança alimentar urbana por meio da colaboração comunitária e do incentivo às boas práticas sanitárias.

### Objetivos Específicos
- ✅ Permitir o cadastro e autenticação de usuários e estabelecimentos alimentícios.
- ✅ Disponibilizar uma interface para que cidadãos possam avaliar estabelecimentos com notas e comentários.
- ✅ Oferecer filtros e buscas por localização, tipo de estabelecimento e média de avaliação.
- ✅ Registrar denúncias relacionadas a más condições sanitárias de forma acessível.
- ✅ Promover a visualização pública de rankings com base nas avaliações realizadas.
- ✅ Garantir a responsividade da aplicação para uso em diferentes dispositivos.

## 🛠️ Tecnologias Utilizadas

| Ferramenta / Tecnologia | Descrição |
|:-------------------------|:-------------------------------------|
| **Controle de Versão** | `Git` & `GitHub` |
| **Design de Interface** | `Figma` |
| **Modelagem de Dados** | `BR Modelo Web` |
| **Frontend** | `HTML5`, `CSS3` |
| **Backend** | `Node.js` com `Express.js` |
| **Linguagem** | `JavaScript` |
| **Banco de Dados** | `MySQL` |
| **Editor de Código** | `Visual Studio Code` |

## 🗺️ Cronograma do Projeto

- **Fase I: Especificação e Planejamento (Maio/Junho de 2025)**
  - **Entregável:** Documento de requisitos, regras de negócio e diagramas de modelagem de dados (Conceitual, Lógico e Físico).
- **Fase II: Desenvolvimento e Implementação (Junho/Julho de 2025)**
  - **Entregável:** Sistema funcional com conexão ao banco de dados e funcionalidades básicas implementadas.

## 📋 Requisitos Detalhados

<details>
<summary><strong>Clique para expandir os Requisitos Funcionais</strong></summary>

| ID | Requisito | Detalhamento | Prioridade|
| :--- | :--- | :--- | :--- |
| **RF-001** | Cadastro e Login | Permitir criação e autenticação de contas para usuários e responsáveis por estabelecimentos. | **Alta** |
| **RF-002** | Listagem e Pesquisa | Exibir estabelecimentos com opções de busca por nome, tipo, localização e avaliação. | **Alta** |
| **RF-003** | Sistema de Avaliação | Habilitar usuários para avaliar com notas e comentários, gerando uma média pública. | **Alta** |
| **RF-004** | Histórico e Rankings | Apresentar o histórico de avaliações e gerar rankings dos estabelecimentos. | Média |
| **RF-005** | Painel Administrativo | Área restrita para moderação de conteúdo e revisão de denúncias. | Média |

</details>

<details>
<summary><strong>Clique para expandir os Requisitos Não Funcionais</strong></summary>

| ID | Requisito | Detalhamento | Prioridade|
| :--- | :--- | :--- | :--- |
| **RNF-001** | Responsividade | O sistema deve se adaptar a diferentes dispositivos e tamanhos de tela. | **Alta** |
| **RNF-002** | Anti-Spam | Implementar mecanismos para evitar registros duplicados e avaliações falsas. | **Alta** |
| **RNF-003** | Integridade dos Dados | Garantir a confiabilidade dos dados com trilhas de auditoria e controle de acesso. | Média |
| **RNF-004** | Backup dos Dados | Realizar cópias de segurança automáticas e diárias para prevenir perda de informações. | Média |

</details>

<details>
<summary><strong>Clique para expandir as Regras de Negócio</strong></summary>

| ID | Regra | Detalhamento | Prioridade|
| :--- | :--- | :--- | :--- |
| **RN-001** | Avaliação Restrita | Apenas usuários cadastrados e autenticados podem avaliar estabelecimentos. | **Alta** |
| **RN-002** | Frequência de Avaliação | Um usuário só pode avaliar o mesmo estabelecimento uma vez a cada 30 dias. | **Alta** |

</details>

## 👥 Equipe e Coordenação

### Docente Responsável
- Edson de Araújo Silva

### Equipe de Desenvolvimento
1. Bruno Manoel Lemos Lima
2. Carlos Eduardo Parente da Silva
3. Cíntia Seixas Fontes
4. Chyntia Freitas Prestes
5. Nélio Tobias Jorio

