export const validateProduk = (req, res, next) => {
  const { kode_produk, nama_produk, harga, stok,} = req.body;

  if (!kode_produk || !nama_produk || !harga || !stok ) {
    return res.status(400).json({ message: "kode, nama, harga dan stok wajib diisi!" });
  }

  next();
};