function nilai(bhsIndo, bhsIngg, mtk, ipa){
    let average = (bhsIndo + bhsIngg + mtk + ipa) / 4;

    if (arguments.length != 4) {
        console.log(`masukan lagi`);
        } else if (average >= 90 && average <= 100) {
            console.log(`Grade A dengan nilai rata  rata : ${average}`);
        } else if (average >= 80 && average < 90) {
            console.log(`Grade B dengan nilai rata  rata : ${average}`);
        } else if (average >= 70 && average < 80) {
            console.log(`Grade C dengan nilai rata  rata : ${average}`);
        } else if (average >= 60 && average < 70) {
            console.log(`Grade D dengan nilai rata  rata : ${average}`);
        } else {
            console.log(`Grade E dengan nilai rata  rata : ${average}`);
        }
    };

nilai(59,59,59,60);