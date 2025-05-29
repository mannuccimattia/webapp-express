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
  const { id } = req.params;

  const movieSql = `SELECT * FROM movies WHERE id = ?`;

  connection.query(movieSql, [id], (err, movieResult) => {
    if (err) return res.status(500).json({
      error: "DB query failed: " + err
    })

    res.json(movieResult);
  })
}

module.exports = { index, show }