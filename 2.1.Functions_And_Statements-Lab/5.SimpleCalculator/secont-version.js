function calculator(firstNum, secondNum, operator) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const operatorMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
    }

    return operatorMap[operator](firstNum, secondNum);

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