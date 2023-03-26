function charactersInRange(charOne, charTwo) {
    let startingChar = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let endingChar = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));

    let result = [];

    for (let asciiCode = startingChar + 1; asciiCode < endingChar; asciiCode++) {
        result.push(String.fromCharCode(asciiCode));
    }

    return result.join(" ");
}

console.log(
    charactersInRange(
        'a',
        'd'
    )
);

console.log(
    charactersInRange(
        '#',
        ':'
    )
);

console.log(
    charactersInRange(
        'C',
        '#'
    )
);