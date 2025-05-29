const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
})

connection.connect((err) => {
  if (err) return console.log("Error while connecting to mySQL: " + err);
  else return console.log("Connected to mySQL");
})

module.exports = connection;