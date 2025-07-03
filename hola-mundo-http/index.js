const express = require('express');
const app = express();
const port = 8080;

app.get('/hola', (req, res) => {
  const quien = req.query.quien ?? 'Mundo';
  console.log(`Respondiendo al saludo de ${req.query.quien}`)
  res.send(`¡Hola ${quien}!`);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
