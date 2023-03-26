function oddAndEvenSum (number){
    let numberArray = number.toString().split('');

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 !== 0) {
            sumOdd += Number(numberArray[i]); 
        } else {
            sumEven += Number(numberArray[i]);
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(
    oddAndEvenSum(1000435)
);

console.log(
    oddAndEvenSum(3495892137259234)
);
