function findSmallestNumber(...numbers) {
    let smallestNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            smallestNumber = numbers[i];
        } else if(numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}

console.log(
    findSmallestNumber(
        2,
        5,
        3
    )
);

console.log(
    findSmallestNumber(
        600,
        342,
        123
    )
);

console.log(
    findSmallestNumber(
        25,
        21,
        4
    )
);

console.log(
    findSmallestNumber(
        2,
        2,
        2
    )
);