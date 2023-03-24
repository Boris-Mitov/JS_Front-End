function calculateOrder(product, quantity) {
    switch (product) {
        case 'coffee':
            return formatToDecimalPoint((1.50 * quantity), 2);
        case 'water':
            return formatToDecimalPoint((1.00 * quantity), 2);
        case 'coke':
            return formatToDecimalPoint((1.40 * quantity), 2);
        case 'snacks':
            return formatToDecimalPoint((2.00 * quantity), 2);
    }

    function formatToDecimalPoint(number, decimalPoint) {
        return number.toFixed(decimalPoint);
    }
}

console.log(
    calculateOrder('water', 5)
);

console.log(
    calculateOrder('coffee', 2)
);
