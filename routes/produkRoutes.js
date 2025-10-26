import express from "express";
import {
  getAllProduk,
  getProdukByKode,
  createProduk,
  updateProduk,
  deleteProduk,
} from "../controllers/produkController.js";
import { validateProduk } from "../middleware/validation.js";

const router = express.Router();

router.get("/", getAllProduk);
router.get("/:kode_produk", getProdukByKode);
router.post("/", validateProduk, createProduk);
router.put("/:kode_produk", validateProduk, updateProduk);
router.delete("/:kode_produk", deleteProduk);

export default router;