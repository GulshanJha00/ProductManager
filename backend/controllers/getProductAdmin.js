const db = require("../service/db");
exports.getProductAdmin = (req, res) => {
  const sql =
    "SELECT * FROM Products";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};