create database if not exists data_produk_ujk;
use data_produk_ujk;

create table produk (
kode_produk varchar(50) primary key,
nama_produk varchar(255) not null,
kategori varchar(100) not null,
harga decimal(10,2) not null,
stok int not null,
deskripsi text,
tanggal_input timestamp default current_timestamp on update current_timestamp
);

show tables;
describe produk;
