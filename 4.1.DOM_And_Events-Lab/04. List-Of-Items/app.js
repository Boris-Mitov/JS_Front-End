function addItem() {
    const inputField = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const newLi = document.createElement('li');
    
    let textToInput = inputField.value;
    newLi.textContent = textToInput;
    
    ulElement.appendChild(newLi)
    
    inputField.value = '';
}

// function addItem() {
//     const inputField = document.getElementById('newItemText');
//     const ulElement = document.getElementById('items');

//     let textToInput = inputField.value;

//     ulElement.innerHTML += `<li>${textToInput}</li>`;
    
//     inputField.value = '';
// }