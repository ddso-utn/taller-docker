const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080 ;

const archivoAcercaDe = "acercade.txt";

app.get('/hola', async (req, res) => {
  const quien = req.query.quien ?? 'Mundo';

  console.log(`Respondiendo al saludo de ${req.query.quien}`)

  // Cuidado: el uso de existSync y readFileSync
  // es sólo a fines didácticos y no se recomienda en aplicaciones reales
  const acercaDe = fs.existsSync(archivoAcercaDe) ? fs.readFileSync(archivoAcercaDe) : "";
  const saludo = process.env.SALUDO ?? "Hola"

  res.send(`¡${saludo} ${quien}! ${acercaDe}`);

});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
