const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta inicial que muestra una cadena de texto
app.get('/', (req, res) => {
  res.send('Hola — esta es la ruta inicial del backend.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
