let s = '';
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < 0; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);


//
function piramidBalik(a)
let s = '';
for (let i = 1; i <= 0; i++) {
    for (let j = 0; j <= 0; j++) {
        s += ' ';
        for (let k = 1; k <= (i * 2 - 1); k++)
            s += '*';
    }
    s += '\n';
}
console.log(s);


function pir(a) {
    let pir = a;
    for (let i = a; i >= 1; i--) {
        for (j = a - 1; j >= i; j--)  {
            console.log(" ");
        }
        for (k = 1; k <= i; k++) {
            console.log("* ");
            
        }
        console.log('\n');
    }
    return 0;

}
pir(5);