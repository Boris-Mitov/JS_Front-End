function oddOccurrences(input) {
    let elementOccurrences = {};

    let elementsArr = input.split(' ');

    for (const element of elementsArr) {
        if (elementOccurrences.hasOwnProperty(element.toLowerCase())) {
            elementOccurrences[element.toLowerCase()]++;
        } else {
            elementOccurrences[element.toLowerCase()] = 1;
        }
    }

    let elementPairs = Object.entries(elementOccurrences);
    for (const [element, count] of elementPairs) {
        if (count % 2 !== 0) {
            console.log(element);
        }
    }
}

oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);

// oddOccurrences(
//     'Cake IS SWEET is Soft CAKE sweet Food'
// );