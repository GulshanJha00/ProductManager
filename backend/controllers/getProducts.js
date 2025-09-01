const db = require("../service/db");
exports.getProducts = (req, res) => {
  const sql =
    "SELECT * FROM Products WHERE status='Published' AND is_deleted=FALSE";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};