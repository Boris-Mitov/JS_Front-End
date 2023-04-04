function sumTable() {
    const firstTable = document.querySelector('table');

    let sum = 0;

    for (let i = 1; i < firstTable.children[0].children.length - 1; i++) {
        sum += Number(firstTable.children[0].children[i].children[1].textContent);
    }

    const sumResultElement = document.getElementById('sum');

    sumResultElement.textContent = sum;
}
