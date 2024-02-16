require("./database.js");
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
  PORT,
  () => console.log(`its live on local host ${PORT}`)
)

app.get('/shirt', (req, res) => {
  res.status(200).send({
    shirt: 'shirttt',
    size: 'large'
  })
});

app.post('/shirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({message: "we need a logo!"})
  }

  res.send({
    shirt: `shirt with ur logo: ${logo} and id of ${id}`,
  });
});