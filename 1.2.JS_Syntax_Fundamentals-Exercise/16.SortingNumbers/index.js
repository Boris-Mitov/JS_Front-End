function sortingNumbers(numbersArray) {
    let sortedArray = [...numbersArray].sort((a, b) => a - b);
    let resultArray = [];
    
    while(sortedArray.length !== 0) {
        resultArray.push(sortedArray.shift());
        resultArray.push(sortedArray.pop());
    }
    return resultArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);