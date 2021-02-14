const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella',
    'Faith', 'Olivia', 'Penelope'];

function searchName(cari,jumlah,callback) {
  let newData = []
  name.filter((data) => {
    if (data.includes(cari)) {
      newData.push(data)
    };
  });
  callback(newData, jumlah)
};

function hasil(data1, jumlah) {
console.log(data1.slice(0, jumlah))
};

searchName("an",3,hasil);
    