function angka(isi) {
    let hasil = '';
    let angka = isi.toString().split(0)
      
    for (let i = 0; i < angka.length; i++){ 
      let urut = angka[i].split("").sort()
      hasil += urut.join("")
    };
    console.log(hasil)
  };
  
  angka(5643104614540314);