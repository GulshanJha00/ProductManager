// controllers/updateProduct.js
const db = require("../service/db");

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { product_name, product_desc, status, updated_by } = req.body;

  const sql = `
    UPDATE Products
    SET product_name = ?, product_desc = ?, status = ?, updated_at = NOW(), updated_by = ?
    WHERE product_id = ? AND is_deleted = FALSE
  `;

  db.query(sql, [product_name, product_desc, status, updated_by || "system", id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product updated successfully" });
  });
};
