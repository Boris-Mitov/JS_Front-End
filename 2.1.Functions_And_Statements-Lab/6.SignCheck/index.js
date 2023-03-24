function signCheck(...numbers) {
    let negativeCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            negativeCount++;
        }
    }
    
    if (negativeCount % 2 !== 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }
}

console.log(
    signCheck(
        5,
        12,
       -15)
)

console.log(
    signCheck(
        -6,
        -12,
         14)
)