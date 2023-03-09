function solve(n, array) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);        
    }
    newArray.reverse();

    let output = "";

    for (let i = 0; i < newArray.length; i++) {
        output += newArray[i];
        if (i !== newArray.length - 1) {
            output += " ";
        }       
    }
    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);