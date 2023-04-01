function townsParser(townsData) {
    let towns = [];

    for (const townData of townsData) {
        let townDataArray = townData.split(' | ');

        let name = townDataArray[0];
        let latitude = Number(townDataArray[1]).toFixed(2);
        let longitude = Number(townDataArray[2]).toFixed(2);

        let town = {
            town: name,
            latitude,
            longitude,
        }

        towns.push(town);
    }

    for (const town of towns) {
        console.log(town);
    }
}

townsParser(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
);

townsParser(
    ['Plovdiv | 136.45 | 812.575']
);