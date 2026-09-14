const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

const usuarios = [];

// Página inicial
app.get("/", (req, res) => {
  res.send("API do Login System funcionando!");
});

// Status da API
app.get("/api/status", (req, res) => {
  res.status(200).json({
    status: "online",
    mensagem: "API do Login System ativa!"
  });
});

// Cadastro
app.post("/api/auth/register", (req, res) => {

  const {
    nome,
    email,
    senha,
    confirmarSenha
  } = req.body;

  if (
    !nome ||
    !email ||
    !senha ||
    !confirmarSenha
  ) {
    return res.status(400).json({
      mensagem: "Todos os campos são obrigatórios!"
    });
  }

  if (senha !== confirmarSenha) {
    return res.status(400).json({
      mensagem: "As senhas não coincidem!"
    });
  }

  const usuarioExiste = usuarios.find(
    usuario => usuario.email === email
  );

  if (usuarioExiste) {
    return res.status(400).json({
      mensagem: "E-mail já cadastrado!"
    });
  }

  const novoUsuario = {
    nome,
    email,
    senha
  };

  usuarios.push(novoUsuario);

  return res.status(201).json({
    mensagem: "Usuário cadastrado com sucesso!"
  });

});

// Login
app.post("/api/auth/login", (req, res) => {

  const { email, senha } = req.body;

  const usuario = usuarios.find(
    usuario => usuario.email === email
  );

  if (!usuario) {
    return res.status(401).json({
      mensagem: "Credenciais inválidas!"
    });
  }

  if (usuario.senha !== senha) {
    return res.status(401).json({
      mensagem: "Credenciais inválidas!"
    });
  }

  return res.status(200).json({
    mensagem: "Login realizado com sucesso!",
    usuario: {
      nome: usuario.nome,
      email: usuario.email
    }
  });

});

app.listen(PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${PORT}`
  );
});