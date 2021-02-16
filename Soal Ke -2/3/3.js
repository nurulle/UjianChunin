function piramidKebalik1() {
  let string = '';
  for ( kolom = 4; kolom >= 1; kolom--) {
    for(baris = 4; baris > kolom; baris--){
      string += ' '
    }
    for(bawah = 1; bawah < (kolom * 2); bawah++){
      string += bawah;
    }
    string += '\n'
  }
  console.log(string)
} 
piramidKebalik1();
