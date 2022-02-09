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
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Readline
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukkan nama anda : ', (nama) => {
//     rl.question('Masukkan nohp anda : ', (nohp) => {
//         console.log(`Terimakasih ${nama}`);
//         console.log(`No Hp anda : ${nohp}`);
//         rl.close();
//     });
// });



// Contact
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan noHp anda : ', (noHP) => {
        const contacts = { nama, noHP };
        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contact = JSON.parse(file);

        contact.push(contacts)

        fs.writeFileSync('data/contact.json', JSON.stringify(contact));
        console.log(`Terimakasih ${nama}, sudah memasukkan nomor ${noHP}`);
        rl.close();
    });
});