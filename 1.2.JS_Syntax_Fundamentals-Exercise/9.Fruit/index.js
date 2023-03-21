function fruitBuy(fruit, weight, pricePerKilo) {
    let weightInKilo = weight / 1000;
    let overallPrice = weightInKilo * pricePerKilo;
    console.log(`I need $${overallPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`)    
}

fruitBuy('orange', 2500, 1.80);
fruitBuy('apple', 1563, 2.35);