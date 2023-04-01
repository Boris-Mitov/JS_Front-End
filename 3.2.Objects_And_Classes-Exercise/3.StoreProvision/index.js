function storeProvision(currentStock, orderedProducts) {
    let storeProducts = {};
    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            storeProducts[currentStock[i]];
        } else {
            storeProducts[currentStock[i - 1]] = Number(currentStock[i]);
        }
    }

    for (let i = 0; i < orderedProducts.length; i++) {
        if (i % 2 === 0) {
            if (!storeProducts.hasOwnProperty(orderedProducts[i])) {
                storeProducts[orderedProducts[i]];
            } else {
                let orderedProductQuantity = Number(orderedProducts[i + 1]);

                storeProducts[orderedProducts[i]] += orderedProductQuantity;

                i++;
            }
        } else {
            storeProducts[orderedProducts[i - 1]] = Number(orderedProducts[i]);
        }
    }

    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`)
    }

};

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);