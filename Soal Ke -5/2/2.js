  function hapus (isi)  {
    let nama = [...isi]
    return nama.filter((kata,index )=> nama.indexOf(kata) === index).sort().join('')
  }
  console.log(hapus("pluginsangatkerensekali"));
  
  