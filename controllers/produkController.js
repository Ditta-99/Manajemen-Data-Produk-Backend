import db from "../config/db.js";

//  Ambil semua data
export const getAllProduk = (req, res) => {
  const q = "SELECT * FROM produk";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(data);
  });
};

//  Ambil berdasarkan kode_produk
export const getProdukByKode = (req, res) => {
  const q = "SELECT * FROM produk WHERE kode_produk = ?";
  db.query(q, [req.params.kode_produk], (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    if (data.length === 0)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json(data[0]);
  });
};

//  Tambah produk
export const createProduk = (req, res) => {
  const { kode_produk, nama_produk, kategori, harga, stok, deskripsi } = req.body;
  const q =
    "INSERT INTO produk (kode_produk, nama_produk, kategori, harga, stok, deskripsi) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(q, [kode_produk, nama_produk, kategori, harga, stok, deskripsi], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Kode produk sudah terdaftar" });
      }
      return res.status(500).json({ message: err.message });
    }
    res.status(201).json({ message: "Data produk berhasil ditambahkan" });
  });
};


//  Update data produk
export const updateProduk = (req, res) => {
  const { nama_produk, kategori, harga, stok, deskripsi } = req.body;
  const kode_produk_to_update = req.params.kode_produk
  const q =
    "UPDATE produk SET nama_produk=?, kategori=?, harga=?, stok=?, deskripsi=? WHERE kode_produk=?";
  db.query(q, [nama_produk, kategori, harga, stok, deskripsi, kode_produk_to_update], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json({ message: "Data produk berhasil diubah" });
  });
};










































// 🔹 Hapus data produk
export const deleteProduk = (req, res) => {
  const q = "DELETE FROM produk WHERE kode_produk=?";
  db.query(q, [req.params.kode_produk], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json({ message: "Data produk berhasil dihapus" });
  });
};