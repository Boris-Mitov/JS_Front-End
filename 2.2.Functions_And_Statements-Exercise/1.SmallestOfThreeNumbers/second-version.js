function findSmallestNumber(...numbers) {
    let smallestNumber = Math.min(...numbers);
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