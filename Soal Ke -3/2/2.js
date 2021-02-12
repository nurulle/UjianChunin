let urut = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        return dataArray.sort( (a, b) => a - b ).slice(nilaiAwal, nilaiAkhir-1)
    } else {
        return 'ulangngi lagi'
    }

}

console.log(urut(3, 7, [1, 3, 2, 5, 4, 6, 8, 7, 10]));



