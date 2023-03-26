function factorialDivision(numOne, numTwo) {
    const factorialOfNumber = (number) => {
        if (number === 0) {
            return 1;
        } else {       
            return (number * factorialOfNumber(number - 1));
        }
    }

    factorialOne = factorialOfNumber(numOne);
    factorialTwo = factorialOfNumber(numTwo);
    
    return (factorialOne / factorialTwo).toFixed(2);
}

console.log(
    factorialDivision(5, 2)
);

console.log(
    factorialDivision(6, 2)
);