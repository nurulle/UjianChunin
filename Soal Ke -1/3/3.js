//function

function plug() {
    console.log("halo gaes");
   }
plug();
   
//method

let alamat = {
    jalan : "Beringin",
    gang : "censana",
    
    full : function () {
        return 'saya tinggal di jalan ' + this.jalan + 'gang ' + this.gang;
    }
}
  
console.log(alamat.full)