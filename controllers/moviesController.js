const connection = require("../data/db_copia");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, moviesResult) => {
    if (err) return res.status(500).json({
      error: "DB query failed: " + err
    })

    res.json(moviesResult);
  })
}

const show = (req, res) => {
  res.send("DEttaglio libro");
}

module.exports = { index, show }