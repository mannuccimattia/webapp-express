// import mysql2
const mysql = require("mysql2");

// set connection
const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
})

// use connection
connection.connect((err) => {
  if (err) return console.log("Error while connecting to mySQL: " + err);
  else return console.log("Connected to mySQL");
})


module.exports = connection;