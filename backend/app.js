const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/", productsRouter);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
