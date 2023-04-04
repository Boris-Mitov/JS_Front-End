function calc() {
    const numOneElement = document.getElementById('num1');
    const numTwoElement = document.getElementById('num2');
    const calculate = Number(numOneElement.value) + Number(numTwoElement.value);

    let sum = document.getElementById('sum');
    sum.value = calculate;
}
