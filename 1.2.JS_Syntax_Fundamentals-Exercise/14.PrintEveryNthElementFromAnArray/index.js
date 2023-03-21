function printNthElements(numbers, step) {
    let resultArray = [];
    for (let i = 0; i < numbers.length; i += step) {
        resultArray.push(numbers[i]);        
    }
    return resultArray;
}

printNthElements(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

printNthElements(['dsa',
'asd', 
'test', 
'tset'], 
2
);

printNthElements(['1', 
'2',
'3', 
'4', 
'5'], 
6
);