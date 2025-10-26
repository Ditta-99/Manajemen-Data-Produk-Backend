import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import produkRoutes from "./routes/produkRoutes.js";
import db from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/produk_ujk", produkRoutes);

app.listen(process.env.PORT, () => {
  console.log(` Server berjalan di port ${process.env.PORT}`);
});


