function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    let subtract = Number(firstNumberElement.value) - Number(secondNumberElement.value);

    resultElement.textContent = subtract;
}