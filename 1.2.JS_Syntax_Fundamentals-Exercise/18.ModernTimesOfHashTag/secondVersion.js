function findWordsWithHashTag(string) {
    return string.split(' ')
        .filter((word) => word.startsWith('#') && checkIfWordIsValid(word))
        .map((word) => word.slice(1))
        .filter((word) => word !== '')
        .join('\n');

    function checkIfWordIsValid(myWord) {
        return [...myWord.toLowerCase()]
            .slice(1)
            .map((symbol) => symbol.charCodeAt(0))
            .every((charCode) => charCode >= 97 && charCode <= 122);
    }
}

findWordsWithHashTag(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
    );

// findWordsWithHashTag(
//     'The symbol # is known #variously in English-speaking #regions as the #number sign'
//     );