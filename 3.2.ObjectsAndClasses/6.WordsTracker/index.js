function wordsTracker(input) {
    let wordsToSearch = input[0].split(' ');

    let wordsCount = {};

    for (const word of wordsToSearch) {
        wordsCount[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        for (const key in wordsCount) {
            if (input[i] === key) {
                wordsCount[key]++;
            }
        }
    }

    let wordsArray = Object.entries(wordsCount);

    wordsArray
        .sort((wordA, wordB) => wordB[1] - wordA[1])
        .forEach(word => {
            console.log(`${word[0]} - ${word[1]}`);
        });

}

wordsTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);

wordsTracker(
    [
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
    ]
);