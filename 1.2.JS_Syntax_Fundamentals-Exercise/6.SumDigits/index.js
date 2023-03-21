function sumDigits(number) {
    let numArray = number.toString().split('').map(num => parseInt(num));
    let sum = 0;
    for (const num in numArray) {
        sum += numArray[num];
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

function sumDigitsSecondVer(number) {
    let sum = 0;
    
    while (number > 0) {
        let lastDigit = number % 10;
        sum += lastDigit;
        number = Math.trunc(number / 10);
    }
    
    console.log(sum);
}

sumDigitsSecondVer(245678);
sumDigitsSecondVer(97561);
sumDigitsSecondVer(543);