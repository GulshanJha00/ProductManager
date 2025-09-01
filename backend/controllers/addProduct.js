const db = require("../service/db");
exports.addProduct = (req, res) => {
  const { product_name, product_desc, status, created_by } = req.body;
  try {
    const sql =
      "INSERT INTO Products (product_name, product_desc, status, created_by) VALUES (?, ?, ?, ?)";
    db.query(
      sql,
      [product_name, product_desc, status, created_by],
      (err, result) => {
        if (err) {
          console.error("DB Insert Error:", err);
          return res.status(500).json({ error: err.message });
        }
        console.log("Inserted Sucessfully")
        res.json({ message: "Product added", productId: result.insertId });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

