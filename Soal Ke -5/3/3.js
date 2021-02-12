function angka (n,a,b){
    let awal = a;
    let isi = []
    isi.push(awal)
    for(let i = a; i < n+a-1 ; i++){
      isi.push(awal += b);
    }
    return isi
  }
  
console.log(angka(2, 3, 4));
  