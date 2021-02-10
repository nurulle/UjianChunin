function un (a, b, c, d){
    let nilai;
    nilai = a + b + c + d;
    mean = nilai/4;
    if( mean === 100){
      console.log(`nilai rata + rata : ${mean}`);
      console.log('A');
    }else if (mean >= 80 &&  mean <= 79){
      console.log(`nilai rata + rata : ${mean}`);
      console.log('B');
    } else if (mean >= 70 || mean <=69){
      console.log(`nilai rata + rata : ${mean}`);
      console.log('C')
    } else {
     console.log(`nilai rata + rata : ${mean}`);
      console.log('E');
    }
  
  }
  


un(50, 50, 50, 35, 78);
  