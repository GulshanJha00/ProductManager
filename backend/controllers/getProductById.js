const db = require("../service/db");

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM Products WHERE product_id = ? AND is_deleted = FALSE";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Product not found" });
    res.json(result[0]);
  });
};
