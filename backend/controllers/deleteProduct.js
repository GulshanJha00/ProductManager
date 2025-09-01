const db = require("../service/db");
exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = `
    UPDATE Products 
    SET is_deleted = TRUE, updated_at = NOW(), updated_by = 'system' 
    WHERE product_id = ?;
  `;

  req.db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Product soft-deleted successfully" });
  });
};
