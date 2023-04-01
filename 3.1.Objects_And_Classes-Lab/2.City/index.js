function printCityInfo(city) {
    let keyValueArray = Object.entries(city);
    for (const [key, value] of keyValueArray) {
        console.log(`${key} -> ${value}`);
    }
}

printCityInfo(
    {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
);

printCityInfo(
    {
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    }
);