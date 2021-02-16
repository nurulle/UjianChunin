const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella',
    'Faith', 'Olivia', 'Penelope'];

function cari(carikata,jml,panggil) {
  let baru = []
  name.filter((data) => {
    if (data.includes(carikata)) {
      baru.push(data)
    };
  });
  panggil(baru, jml)
};

function hasil(data1, jml) {
console.log(data1.slice(0, jml))
};

cari("an",3,hasil);
    