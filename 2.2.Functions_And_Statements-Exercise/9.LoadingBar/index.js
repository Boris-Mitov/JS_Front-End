function loadingBarCheck(number) {
    if (number === 100) {
        console.log('100% Complete!')
    } else {
        let loadingBar = ['[', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ']'];
        let indexFromNumber = number / 10;  
        for (let i = 1; i <= indexFromNumber; i++) {
            loadingBar[i] = '%';
        }

        console.log(`${number}% ` + loadingBar.join(''));
        console.log(`Still loading...`);
    }
}

loadingBarCheck(30);

loadingBarCheck(50);

loadingBarCheck(100);