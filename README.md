![API](https://img.shields.io/badge/Projeto-API-blue)

# 📝 API RESTful para Gestão de Contatos
> Teste Técnico – Desenvolvedor Back End Jr.

Este projeto consiste em uma **API RESTful** para gerenciamento de lista de contatos, desenvolvida com a stack **Node.js + Express + MySQL + Sequelize**. 

O foco deste sistema é a aplicação de **Clean Code**, arquitetura organizada e validação rígida de regras de negócio, garantindo um código limpo, manutenível e sem redundâncias.

---

## 📌 Funcionalidades Implementadas

### ✅ Gestão de Contatos (CRUD)
- **Criar (`POST`):** Adição de novos contatos informando nome e telefone.
- **Listar (`GET`):** Retorno de todos os contatos cadastrados.
- **Atualizar (`PATCH`):** Edição dos dados de um contato específico pelo ID.
- **Deletar (`DELETE`):** Exclusão de um contato do banco de dados pelo ID.

### ✅ Regras de Negócio e Validações
- **Validação de Nome:** O sistema bloqueia a criação ou atualização caso o nome não possua, no mínimo, **duas palavras com pelo menos 3 letras cada** (preposições curtas como "de" ou "da" são devidamente ignoradas na contagem de palavras válidas).
- **Status Codes Padronizados:** Respostas HTTP rigorosas de acordo com o padrão REST (Ex: `201 Created`, `204 No Content`, `400 Bad Request`).

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia      | Finalidade                                      |
|-----------------|-------------------------------------------------|
| Node.js         | Ambiente de execução JavaScript                 |
| Express.js      | Framework web para criação das rotas da API     |
| MySQL           | Banco de dados relacional                       |
| Sequelize       | ORM para manipulação e modelagem do banco       |
| Dotenv          | Gerenciamento de variáveis de ambiente          |

---

## 📂 Estrutura do Projeto

```text
api_lista_contatos_portdata/
├── 📄 .env                 # Variáveis de ambiente (Credenciais do Banco)
├── 📄 package.json         # Dependências e scripts do projeto
│
└── 📦 src/
    ├── 📄 server.js        # Ponto de entrada da aplicação e rotas
    ├── 📂 config/          # Instância e conexão com o banco via Sequelize
    ├── 📂 controllers/     # Lógica de requisições, respostas e validações
    └── 📂 models/          # Modelagem da tabela de Contatos
```

## 🚀 Como Configurar e Rodar o Projeto

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js** (v14+ recomendado)
- **MySQL** rodando localmente

### 2. Configuração do Banco de Dados
Acesse seu MySQL (via interface como Workbench ou terminal) e crie um banco de dados em branco:
```sql
CREATE DATABASE contatos_db;
```
*(Nota: As tabelas serão geradas automaticamente pelo Sequelize ao iniciar a aplicação).*

### 3. Instalação e Variáveis de Ambiente
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/ATalDaAiume/api_lista_contatos_portdata.git
cd api_lista_contatos_portdata
npm install
```

Na raiz do projeto, crie um arquivo chamado `.env` e configure suas credenciais do MySQL:
```env
DB_NAME=contatos_db
DB_USER=seu_usuario_do_mysql
DB_PASS=sua_senha_do_mysql
DB_HOST=localhost
PORT=3000
```

### 4. Execução
Inicie o servidor com o comando:
```bash
npm start
```
O console exibirá a mensagem `Server is running on port 3000`. A API estará pronta para receber requisições em `http://localhost:3000/contatos`.
