function kebalik(isi) {
	let kalimat = isi; 
	let hasil = '';

  for (let i = isi.length - 1; i >= 0; i--) {
		hasil += kalimat[i];
	}
	return hasil;
}

console.log(kebalik('plugin cinta saya'));



 
function balik(kata){
	let isi = kata.split(" ").reverse(); 
	let string = "";
	for(word in isi)
		string += (word > 0 ? " " : "") + isi[word]; 
	return string;
}

console.log(balik("plugin cinta saya"));
