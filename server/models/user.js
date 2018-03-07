var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
  id: string,
  taikhoan: string,
  matkhau: string,
  gioithieu: string,
  maunguoi: string,
  thongtincoban: {
    ten: string,
    tuoi: number,
    chomsao: string,
    chieucao: number,
    dangnguoi: string,
    nhommau: string,
    noiohientai: string,
    quequan: string,
    anhchiem: string
  }
  hocvannghenghiep: {
    hocvan: string,
    nghenghiep: string,
    thunhaphangthang: number
  }
  giadinh: {
    tinhtranghonnhanh: string,
    dacocon: string,
    mongmuoncocon: number,
    tinhtrangsong: string
  }
  phongcachsong: {
    sothich: [],
    tinhcach: string,
    quanhexahoi: string,
    mongmuongapmat: string,
    mongmuonkethon: string,
    sansanglamviecnha: string,
    ngaynghi: string,
    uongruou: string,
    hutthuoc: string,
    chiphicholanhendau: number
  }
});
module.exports = function(db) {
  return db.model('user', Schema)
}
