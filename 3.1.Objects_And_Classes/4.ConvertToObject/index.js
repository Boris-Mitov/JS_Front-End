function convertToObject(jsonString) {
    let personInfo = JSON.parse(jsonString);

    let keyValuePairs = Object.entries(personInfo);
    for (const [key, value] of keyValuePairs) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject(
    '{"name": "George", "age": 40, "town": "Sofia"}'
);

convertToObject(
    '{"name": "Peter", "age": 35, "town": "Plovdiv"}'
);