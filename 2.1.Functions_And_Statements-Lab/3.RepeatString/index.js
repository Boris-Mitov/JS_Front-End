function repeatString(string, multiplier) {
    let result = ''; 
    for (let i = 0; i < multiplier; i++) {
        result += string;
    }
    return result;
}

console.log(
    repeatString("abc", 3)
);

console.log(
    repeatString("String", 2)
);