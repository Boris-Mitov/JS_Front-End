function printMatrixOfNumber(number) {
    new Array(number).fill(new Array(number).fill(number)).forEach(row => console.log(row.join(' ')));
}

printMatrixOfNumber(3);
printMatrixOfNumber(7);
printMatrixOfNumber(2);