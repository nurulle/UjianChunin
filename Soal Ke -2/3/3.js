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
  console.log(string)
} 
piramidKebalik();