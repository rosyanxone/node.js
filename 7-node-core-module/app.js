// Core Module
// File System
const fs = require('fs');

// Menulis File (Synchronous)
// try {
//     fs.writeFileSync('tex/test.txt', 'Menulis secara synchronous!!');
// } catch (e) {
//     console.log(e);
// }


// Menulis file (Asynchronous)
// fs.writeFile('data/test.txt', 'Menulis secara Asynchronous', (err) => {
//     console.log(err);
// });


// Membaca File (Synchronous)
// const data = fs.readFileSync('data/test.txt'); // 'utf-8'
// console.log(data.toString());


// Membaca File (Asynchronous)
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});