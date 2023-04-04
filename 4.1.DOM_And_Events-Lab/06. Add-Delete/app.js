function addItem() {
    const inputField = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const newLi = document.createElement('li');
    const newA = document.createElement('a');

    let textToInput = inputField.value;
    
    newLi.textContent = textToInput;
    newA.textContent = '[Delete]';
    newA.href = '#';
    newA.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })
    
    newLi.appendChild(newA); 
    ulElement.appendChild(newLi);

    inputField.value = '';
}


// function addItem() {
//     const inputField = document.getElementById('newItemText');
//     const ulElement = document.getElementById('items');

//     let textToInput = inputField.value;
//     ulElement.innerHTML += `<li>${textToInput}<a href="#">[Delete]</a></li>`;
    
//     inputField.value = '';

//     let aElements = document.getElementsByTagName('a');
    
//     for (let i = 0; i < aElements.length; i++) {
//         aElements[i].addEventListener('click', (e) => {
//             e.currentTarget.parentNode.remove();
//         })
//     }
// }