function palindromeIntegerCheck (numbers) {
    const isPalindrome = (num) => 
        Number([...num.toString()]
                    .reverse()
                    .join('')) === num;
    return numbers
        .map(isPalindrome)
        .join('\n');
}

console.log(
    palindromeIntegerCheck(
        [123,323,421,121]
    )
);

console.log(
    palindromeIntegerCheck(
        [32,2,232,1010]
    )
);