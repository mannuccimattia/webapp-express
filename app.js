const express = require("express");
const app = express();
const port = 3000;

const moviesRouter = require("./routers/moviesRouter");

app.get("/", (req, res) => {
  res.send("Movies API server");
})

app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})