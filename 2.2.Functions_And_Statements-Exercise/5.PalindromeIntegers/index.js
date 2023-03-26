function palindromeIntegerCheck(numbers) {
    for (const number of numbers) {
        let reverseNumber = Number([...number.toString()]    
            .reverse()
            .join(''));

            //number.toString().split('').reverse().join('');

        if (number === reverseNumber) {
            console.log(true);
        } else {
            console.log(false);
        } 
    }
}

palindromeIntegerCheck(
        [123,323,421,121]
);

palindromeIntegerCheck(
        [32,2,232,1010]
);