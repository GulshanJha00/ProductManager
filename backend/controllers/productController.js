const db = require("../service/db");

exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM Products WHERE status='Published' AND is_deleted=FALSE";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addProduct = (req, res) => {
  const { product_name, product_desc, status, created_by } = req.body;
  const sql =
    "INSERT INTO Products (product_name, product_desc, status, created_by) VALUES (?, ?, ?, ?)";
  db.query(sql, [product_name, product_desc, status, created_by], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product added", productId: result.insertId });
  });
};

exports.softDeleteProduct = (req, res) => {
  const { id } = req.params;
  const { updated_by } = req.body;
  const sql = "UPDATE Products SET is_deleted=TRUE, updated_by=? WHERE product_id=?";
  db.query(sql, [updated_by, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product soft-deleted" });
  });
};
