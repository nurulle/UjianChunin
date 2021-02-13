function urut(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        return dataArray.sort( (a, b) => a - b ).slice(nilaiAwal, nilaiAkhir-1)
    } else {
        return 'ulangngi lagi'
    }
};
urut(3, 7, [1, 3, 2, 5, 4, 6, 8, 7, 10]);



//console.log(urut(3, 7, [1, 3, 2, 5, 4, 6, 8, 7, 10]));


// function readBooks(nilaiAwal, nilaiAkhir, dataArray) {
//     setTimeout(function () {
        
//         if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
//             return dataArray.sort((a, b) => a - b).slice(nilaiAwal, nilaiAkhir - 1)
//         } else {
//             return 'ulangngi lagi'
//         }
//     });
// };

// console.log(readBooks(3, 7, [1, 3, 2, 5, 4, 6, 8, 7, 10]));
