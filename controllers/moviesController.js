const connection = require("../data/db_copia");

const index = (req, res) => {
  res.send("Elenco film");
}

const show = (req, res) => {
  res.send("DEttaglio libro");
}

module.exports = { index, show }