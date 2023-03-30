let count = 5;

const parser = {
    increment: (count) => ++count,
    decrement: (count) => --count,
    reset: () => count = 0,
}

count = parser.increment(count); 
 

console.log(
    count
);


let person = { 
    firstName: "pesho",
    lastName: "mesho",
    age: 23 
};

let jsonString = JSON.stringify(person);

console.log(jsonString);

let stringJson = JSON.parse(jsonString);

console.log(stringJson);