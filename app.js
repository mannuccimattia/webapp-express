const express = require("express");
const app = express();
const port = 3000;

// import router
const moviesRouter = require("./routers/moviesRouter");

// import middlewares
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const imagePathMiddleware = require("./middlewares/imagePath");


// set ./public as static 
app.use(express.static("public"));

// use json parser
app.use(express.json());

// use imagePath middleware
app.use(imagePathMiddleware);


// entry point
app.get("/", (req, res) => {
  res.send("Movies API server");
})

// use router
app.use("/movies", moviesRouter);

// use middlewares
app.use(errorsHandler);
app.use(notFound);

// leave on listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})