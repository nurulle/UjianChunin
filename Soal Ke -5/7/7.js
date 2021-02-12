//toFixed()
let angka = 1910.234
console.log("angka() " + angka.toFixed());
console.log("angka(2) " + angka.toFixed(2));
console.log("angka(6) " + angka.toFixed(6));

//toPrecision
let angka1 = new Number (6.123456);
console.log(angka1.toPrecision());
console.log(angka1.toPrecision(2));

//Number.isFinite
let cek = Number.isFinite(10);
console.log(cek);

//toUpperCase
let besar = "ayo bayar";
console.log(besar.toUpperCase());

//repeat()
let bisa = "Pasti ku bisa! ";
console.log(bisa.repeat(2));

//Date()
let waktu = Date();
console.log("Sekarang ", waktu);

//Math.sqrt
console.log("--AKAR KUADRAT--");
console.log("akar(16) adalah " + Math.sqrt(16));

//match()
let kata = 'Nurul Chotimah';
let cari = new RegExp("Nu");
let temukan = kata.match(cari);
console.log(temukan);

//test()
let kalimat = "semangat kamu pasti bisa";
let kat = new RegExp( " kamu " );
let hsl = kat.test(kalimat);
console.log("hasilnya : " + hsl);


//max()
console.log("---Maksimal---")
console.log("nilai max dari (3, 4, 0.19) : " + Math.max(3, 4, 0.19));


// //chart
// let nama = "cacacoco";
// console.log(nama.charAt(5));
    
// //slice()
// let nama2 = ['caca', 'coco', 'roro', 'tinul', 'zulaikha']
// let tambah = nama2.slice(1, 2)
// console.log(tambah)

// //concat()
// let angka = [1, 2, 3, 4];
// console.log(angka);

// let angka2 = angka.concat(5, 6, 7, 8);
// console.log(angka2);

// //sort()
// let no = [2, 4, 5, 1, 3];
// no.sort();
// console.log(no);

// //reserve()
// let number = [1, 2, 3, 4, 5, 6, 7];
// number.reverse();
// console.log(number);

// //join()
// let siapa = ['nurul', 'chotimah'];
// console.log(siapa.join('_'));

// //push()
// let namaku = ["caca", "cici", "cucu", "coco"];

// namaku.push("cece")
// console.log(arr);

// //pop()
// let namaku2 = ["caca", "cici", "cucu", "coco"];

// namaku2.pop();
// console.log(namaku2);

// //unshift()
// let arr = ["caca", "cici", "cucu", "coco"];

// arr.unshift('caccc');
// console.log(arr);

// //shift()
// let arr2 = ["caca", "cici", "cucu", "coco"];

// arr2.shift();
// console.log(arr2);
