function findWordsWithHashTag(string) {
    let arrayOfWords = string.split(` `);

    for (const word of arrayOfWords) {
        if(word.startsWith('#') 
            && word.length > 1 
            && checkIfWordIsValid(word)) {
                console.log(word.slice(1));
        }
    }

    function checkIfWordIsValid(myWord) {
        let myWordLowerCase = myWord
                                .toLowerCase()
                                .slice(1);
        let isValid = true;

        for (const symbol of myWordLowerCase) {
            let asciiCode = symbol.charCodeAt(0);

            if(asciiCode < 97 || asciiCode > 122) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }
}

findWordsWithHashTag(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
    );

// findWordsWithHashTag(
//     'The symbol # is known #variously in English-speaking #regions as the #number sign'
//     );