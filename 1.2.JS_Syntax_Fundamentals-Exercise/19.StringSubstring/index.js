function stringSubstring(word, text) {
    let textArray = text.split(' ');

    let isPresent = false;

    for (const wordFromArray of textArray) {
        if(wordFromArray.toLowerCase() === word) {
            isPresent = true;
            break;
        }
    }

    if(isPresent) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring(
    'javascript',
'JavaScript is the best programming language'
);

stringSubstring('python',
'JavaScript is the best programming language'
);