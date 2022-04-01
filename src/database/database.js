const mysql = require("mysql");
const util = require("util");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3308,
  database: "futebol",
});

const db = {
  query(sql, args) {
    return util.promisify(connection.query).call(connection, sql, args);
  },
  close() {
    return util.promisify(connection.end).call(connection);
  },
};

module.exports = db;
