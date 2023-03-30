function convertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor,
    }

    let objectToJSON = JSON.stringify(person);
    console.log(objectToJSON);
}

convertToJSON(
    'George', 'Jones', 'Brown'
);

convertToJSON(
    'Peter', 'Smith', 'Blond'
);