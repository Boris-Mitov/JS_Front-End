function loadingBarCheck(number) {
    if (number === 100) {
        console.log('100% Complete!')
    } else {
        console.log(`${number}% [${"%".repeat(number / 10)}${".".repeat(10 - (number / 10))}]`);
        console.log(`Still loading...`);
    }
}

loadingBarCheck(30);

loadingBarCheck(50);

loadingBarCheck(100);