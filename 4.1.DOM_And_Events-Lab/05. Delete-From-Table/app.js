function deleteByEmail() {
    const inputElement = document.querySelector('input[name="email"]');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const resultElement = document.getElementById('result');
 
    let emailValue = inputElement.value;
    let foundElement = evenTds.find((td) => td.textContent === emailValue);
    if (foundElement) {
        foundElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

}


// function deleteByEmail() {
//     const inputElement = document.getElementsByName('email');

//     const tableRowsElements = document.querySelectorAll('tr');

//     const resultElement = document.getElementById('result');
 
//     let isDeleted = false;

//     for (let i = 0; i < tableBodyElements.length; i++) {
//         if (tableRowsElements[i].textContent.includes(inputElement[0].value)) {
//             tableRowsElements[i].textContent = '';
//             isDeleted = true;
//             inputElement[0].value = '';
//             break;
//         }
//     } 

//     if (isDeleted) {
//         resultElement.textContent = 'Deleted.';
//     } else {
//         resultElement.textContent = 'Not found.';
//     }

// }
