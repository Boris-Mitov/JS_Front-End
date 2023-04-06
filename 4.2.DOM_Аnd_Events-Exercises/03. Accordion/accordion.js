function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    const divExtraElement = document.getElementById('extra');


    if (divExtraElement.style.display === '' || divExtraElement.style.display === 'none') {
        divExtraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        divExtraElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }

}