const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.FRONTEND,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/", productsRouter);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
