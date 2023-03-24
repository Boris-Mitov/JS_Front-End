function calculator(firstNum, secondNum, operator) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    switch (operator) {
        case 'add':
            return add(firstNum, secondNum);
        case 'subtract':
            return subtract(firstNum, secondNum);
        case 'divide':
            return divide(firstNum, secondNum);
        case 'multiply':
            return multiply(firstNum, secondNum);
    }
}

console.log(
    calculator(5,
        5,
        'multiply')
);

console.log(
    calculator(
        40,
        8,
        'divide')
);

console.log(
    calculator(
        12,
        19,
        'add')
);

console.log(
    calculator(
        50,
        13,
        'subtract')
);