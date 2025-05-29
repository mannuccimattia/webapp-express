const express = require("express");
const router = express.Router();

// import controller
const moviesController = require("../controllers/moviesController");


// routes
router.get("/", moviesController.index);

router.get("/:id", moviesController.show);


module.exports = router;