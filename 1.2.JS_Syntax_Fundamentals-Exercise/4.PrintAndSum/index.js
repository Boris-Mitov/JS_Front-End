function printAndSum(numOne, numTwo) {
    let numArray = [];
    let sum = 0;
    for (let number = numOne; number <= numTwo; number++) {
        numArray.push(number);
        sum += Number (number);
    }

    console.log(numArray.join(" "));
    console.log('Sum: ' + sum);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);