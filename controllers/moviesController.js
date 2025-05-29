// import db
const connection = require("../data/db_copia");

// index
const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, moviesResult) => {
    if (err) return res.status(500).json({
      error: "DB query failed: " + err
    })
    const movies = moviesResult.map(movie => {
      const mov = { ...movie, image: req.imagePath + movie.image };

      return mov;
    });

    res.json(movies);
  })
}

// show
const show = (req, res) => {
  const { id } = req.params;

  const movieSql = `SELECT M.*, ROUND(AVG(R.vote)) AS average_vote
  FROM movies M 
  JOIN reviews R ON M.id = R.movie_id
  WHERE M.id = ?`;

  const reviewsSql = `
  SELECT * 
  FROM movies M
  JOIN reviews R ON M.id = R.movie_id
  WHERE M.id = ? 
  `

  connection.query(movieSql, [id], (err, movieResult) => {
    if (err)
      return res.status(500).json({
        error: "DB query failed: " + err
      })
    if (movieResult.length === 0 || movieResult[0].id === null)
      return res.status(404).json({
        error: "Movie not Found"
      })
    const movie = movieResult[0];

    connection.query(reviewsSql, [id], (err, reviewsResult) => {
      if (err)
        return res.status(500).json({
          error: "DB query failed: " + err
        })
      movie.reviews = reviewsResult;

      res.json({ ...movie, image: req.imagePath + movie.image });
    })

  })

}

module.exports = { index, show }