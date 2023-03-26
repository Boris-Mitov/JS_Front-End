function isPerfect(number) {
    let arrayOfDividers = [];
    for (let num = 1; num < number; num++) {
        if (number % num === 0) {
            arrayOfDividers.push(num);
        }
    }

    if (arrayOfDividers.reduce((a,b) => a + b, 0) === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfect(6);
isPerfect(28);
isPerfect(1236498);
