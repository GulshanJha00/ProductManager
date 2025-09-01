const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "product_cms",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ Export the pool (not just object) so .query works
module.exports = pool;
