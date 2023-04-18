function thePianist(data) {
    let piecesCount = Number(data[0]);

    let pieces = {};

    for (let i = 1; i <= piecesCount; i++) {
        let currentPieceData = data[i].split('|');
        let piece = currentPieceData[0];
        let composer = currentPieceData[1];
        let key = currentPieceData[2];

        let currentPiece = {
            piece,
            composer,
            key,
        }
        pieces[piece] = currentPiece;
    }
    
    data.splice(0, (1 + piecesCount));
    data.pop();

    for (const commandData of data) {
        let commandElements = commandData.split('|');
        let command = commandElements[0];
        let targetPiece = commandElements[1];

        if (pieces[targetPiece]) {
            switch (command) {
                case 'Add':
                    console.log(`${targetPiece} is already in the collection!`)
                    break;
                case 'Remove':
                    delete pieces[targetPiece];
                    console.log(`Successfully removed ${targetPiece}!`);
                    break;
                case 'ChangeKey':
                    let key = commandElements[2];
                    pieces[targetPiece].key = key;
                    console.log(`Changed the key of ${targetPiece} to ${key}!`);
                    break;
            }
        } else {
            switch (command) {
                case 'Add':
                    let composer = commandElements[2];
                    let key = commandElements[3];
                    let newPiece = {
                        piece: targetPiece,
                        composer,
                        key
                    }
                    pieces[targetPiece] = newPiece;
                    console.log(`${targetPiece} by ${composer} in ${key} added to the collection!`)
                    break;
                case 'Remove':
                    console.log(`Invalid operation! ${targetPiece} does not exist in the collection.`)
                    break;
                case 'ChangeKey':
                    console.log(`Invalid operation! ${targetPiece} does not exist in the collection.`)
                    break;
            }
        }
    }

    for (const key in pieces) {
        console.log(`${pieces[key].piece} -> Composer: ${pieces[key].composer}, Key: ${pieces[key].key}`)
    }

}

// thePianist(
//     [
//         '3',
//         'Fur Elise|Beethoven|A Minor',
//         'Moonlight Sonata|Beethoven|C# Minor',
//         'Clair de Lune|Debussy|C# Minor',
//         'Add|Sonata No.2|Chopin|B Minor',
//         'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//         'Add|Fur Elise|Beethoven|C# Minor',
//         'Remove|Clair de Lune',
//         'ChangeKey|Moonlight Sonata|C# Major',
//         'Stop'
//     ]
// );

thePianist(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
      ]
);