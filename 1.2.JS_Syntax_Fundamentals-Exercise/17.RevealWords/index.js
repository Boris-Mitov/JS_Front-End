function revealWords(stringWords, template) {
    let arrayOfWords = stringWords.split(`, `);

    let arrayTemplate = template.split(` `);

    for (const word of arrayOfWords) {
        for (let i = 0; i < arrayTemplate.length; i++) {
            if (arrayTemplate[i].includes(`*`) && arrayTemplate[i].length === word.length) {
                arrayTemplate[i] = word;
            }
        }
    }
    console.log(arrayTemplate.join(` `));
}


revealWords('great',
'softuni is ***** place for learning new programming languages');
// revealWords('great, learning',
// 'softuni is ***** place for ******** new programming languages');