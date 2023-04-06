function addItem() {
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');
    const selectElement = document.createElement('option');

    selectElement.textContent = textElement.value;
    selectElement.value = valueElement.value;

    menuElement.appendChild(selectElement);

    textElement.value = '';
    valueElement.value = '';
}