function oddOccurrences(input) {
    let elementsArr = input.split(' ');

    let elementCounts = new Map();

    for (let element of elementsArr) {
        element = element.toLowerCase();
        if (elementCounts.has(element)) {
            elementCounts.set(element, elementCounts.get(element) + 1);
        } else {
            elementCounts.set(element, 1);
        }
    }

    let result = '';

    for (const element of elementCounts) {
        if (element[1] % 2 !== 0) {
            result += element[0] + ' ';
        }
    }

    console.log(result.trimEnd());
}

oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);

// oddOccurrences(
//     'Cake IS SWEET is Soft CAKE sweet Food'
// );