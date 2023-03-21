function sameDigitsCheck(number) {
    let digitsArray = number.toString().split('').map(digit => parseInt(digit));
    let isSameDigit = true;
    let sum = 0;
    for (let i = 0; i < digitsArray.length; i++) {
        if (digitsArray[i] === digitsArray[i - 1]) {
            isSameDigit = true;
        } else {
            if (i > 0) {
                isSameDigit = false;
            }
        }
        sum += digitsArray[i];
    }
    console.log(isSameDigit);
    console.log(sum);
}

sameDigitsCheck(2222222);
sameDigitsCheck(1234);

sameDigitsCheck(1);