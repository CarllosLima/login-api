# 🚀 Login API - Sistema de Autenticação RESTful

## 📖 Sobre o Projeto

Este projeto consiste em uma API RESTful desenvolvida com **Node.js** e **Express**, criada como atividade prática para o estudo de desenvolvimento Back-End.

A API simula um sistema simples de autenticação de usuários, permitindo o cadastro e login através de requisições HTTP, além de realizar validações e retornar os códigos de status apropriados para cada situação.

---

## 👨‍💻 Autor

**Carlos Alberto**

---

## 🎯 Objetivo

O objetivo deste projeto é aplicar conceitos fundamentais de:

- Node.js
- Express
- APIs RESTful
- Rotas HTTP
- Métodos GET e POST
- Validação de dados
- Códigos de status HTTP
- Versionamento com Git
- Publicação no GitHub

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- Thunder Client
- Git
- GitHub

---

## 📂 Estrutura do Projeto

```txt
login-api
│
├── Prints
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── Questoes.txt
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/CarllosLima/login-api.git
```

Entre na pasta do projeto:

```bash
cd login-api
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o Projeto

Inicie o servidor:

```bash
node server.js
```

Resultado esperado:

```txt
Servidor rodando em http://localhost:3000
```

---

## 🔗 Rotas Disponíveis

### Status da API

```http
GET /api/status
```

Resposta:

```json
{
  "status": "online",
  "mensagem": "API do Login System ativa!"
}
```

---

### Cadastro de Usuário

```http
POST /api/auth/register
```

Exemplo:

```json
{
  "nome": "Carlos Alberto",
  "email": "carlos@gmail.com",
  "senha": "123456",
  "confirmarSenha": "123456"
}
```

Validações:

- Campos obrigatórios
- Senhas iguais
- E-mail não duplicado

---

### Login

```http
POST /api/auth/login
```

Exemplo:

```json
{
  "email": "carlos@gmail.com",
  "senha": "123456"
}
```

Validações:

- Usuário existente
- Senha correta

---

## ✅ Códigos HTTP Utilizados

| Código | Significado |
|----------|-------------|
| 200 | Login realizado com sucesso |
| 201 | Usuário cadastrado com sucesso |
| 400 | Dados inválidos ou e-mail existente |
| 401 | Credenciais inválidas |

---

## 🧪 Testes Realizados

Os seguintes testes foram executados utilizando o Thunder Client:

✅ Cadastro com sucesso (201 Created)

✅ Cadastro com erro (400 Bad Request)

✅ Login com sucesso (200 OK)

✅ Login com erro (401 Unauthorized)

✅ Consulta da rota de status

---

## 📸 Evidências

As capturas de tela dos testes realizados estão disponíveis na pasta:

```txt
Prints/
```

---

## 📚 Conceitos Aplicados

Durante o desenvolvimento deste projeto foram utilizados os seguintes conceitos:

- Middleware `express.json()`
- Rotas HTTP
- Requisições GET e POST
- Objeto `req`
- Objeto `res`
- Manipulação de JSON
- Estruturas condicionais
- Arrays em memória
- Códigos de status HTTP
- APIs RESTful

---

## 🎓 Atividade Acadêmica

Projeto desenvolvido como atividade prática de Back-End para aplicação dos conceitos de APIs RESTful utilizando Node.js e Express.

---

## 🔗 Repositório

GitHub:

```txt
https://github.com/CarllosLima/login-api
```



🟢 Publicado no GitHub

🟢 Pronto
