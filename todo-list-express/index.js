const express = require('express');
const cors = require('cors');

const app = express();
const port = 3334;

app.use(express.json());
app.use(cors());

// GET /Welcome
app.get('/welcome', (req, res) => {
  res.send({
    message: 'Bem-vindo a nossa API com Express',
  });
});

// GET /users
app.get('/users', (req, res) => {
  res.send([
    {
      "username": "@paulo",
      "id": "2123"
    },
    {
      "username": "@henrique",
      "id": "2124"
    }
  ]);
});

app.listen(port, () => {
  console.log(`API em Express executando com sucesso na porta ${port}`);
});