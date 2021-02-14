//tnpa waktu
let seblak = true;
const janji = new Promise((resolve, reject) => {
    if (seblak) {
        resolve('ayo pergi..');
    } else {
        reject('ga jadi pergi');
  };
});

janji
  .then(Response =>console.log(' ok ' + Response))
  .catch(Response => console.log('hmm ' + Response))

//janji dg waktu tunggu
let kebab = true;
const janji2 = new Promise((resolve, reject) => {
   if (kebab) {
     setTimeout(() => {
        resolve('ayo pergi..');
     }, 2000);
     
  } else {
      setTimeout(() => {
        reject('ga jadi pergi');
      }, 2000)
  };
});

console.log('mulai');
//console.log(janji2.then(() => console.log(janji2)));
janji2
  .then(Response => console.log(' ok ' + Response))
  .catch(Response => console.log('hmm ' + Response));
console.log('selesai');

//
const semangat = () => {
  return new Promise((resolve, reject) => {
    let bangkit = true;

    if (bangkit) {
      resolve("bismillah pasti bisa");
    } else {
      reject("astagfirullah");
    };
  });
};

semangat()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err);
  });