// testing

let num = 1;
let numChar = '1'; 
let name = 'Gogo';
let output = name + num;
let arr = []; //array (it is object)
let obj = {}; //object (it is object)

console.log(typeof arr);
console.log(typeof name);
console.log(typeof num);
console.log(typeof obj);

    // this compares value from same type char/string
if(num == numChar) {
    console.log('Equal value!')
}
    // this compares value and type
if(num === numChar) {
    console.log('Equal!')
} else {
    console.log('Not equal value and type!')
}


//Declared/truty vs falsy value to get in the if 

let num15 = 0;  //flasy = false 0, -0, "", null, undefined, NaN
console.log(num15);

if (num15) {
    console.log('Declared!')
}


let matrix = [[1,2,3], [4,5,6], [7,8], [9], [10,11,12,13,14]];
console.table(matrix);

matrix.forEach((e, i) => {
    console.log(i);
    console.log(e);
});