
// function piramidKebalik() {
//   let string = '';
//   for ( kolom = 4; kolom >= 1; kolom--) {
//     for(baris = 4; baris > kolom; baris--){
//       string += ' '
//     }
//     for(bawah = 1; bawah < (kolom * 2-1); bawah++){
//       string += bawah;
//     }
//     string += '\n'
//   }

//   console.log(string)
// } 
// piramidKebalik();


function piramidKebalik() {
  let string = '';
  for(i = 1; i <= 5; i++){
    for(j = 1; j <= i;  j++){
      string += ' '
    }

    for(k = 5 - i; k >= i - 5 ; k--){
      string += i
    }
    string += '\n'
  }
  // for ( kolom = 4; kolom >= 1; kolom--) {
  //   for(baris = 4; baris > kolom; baris--){
  //     string += ' '
  //   }
  //   for(bawah = 1; bawah < (kolom * 2-1); bawah++){
  //     string += bawah;
  //   }
  //   string += '\n'
  // }

  console.log(string)
} 
piramidKebalik();