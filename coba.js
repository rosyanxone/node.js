// console.log('Hello World');
const functionONE = (nama) => `Hi, nama saya ${nama}`;
const PI = 3.14;

const mahasiswa = {
    nama: "Rausyanfikr Karmayoga",
    umur: 19,
    cetakMhs() {
        return `\nNama saya ${this.nama} dan saya ${this.umur} tahun`;
    },
};


class Orang {
    constructor() {
        console.log('Class Orang telah dibuat!!');
    }
}


// module.exports.functionONE = functionONE;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { functionONE, PI, mahasiswa, Orang };