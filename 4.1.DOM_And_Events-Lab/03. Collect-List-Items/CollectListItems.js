function extractText() {
    const liElements = Array.from(document.getElementsByTagName('li'));

    let output = '';

    for (const li of liElements) {
        output += li.textContent + '\n';
    }

    const textAreaElement = document.getElementById('result');

    textAreaElement.textContent = output;
}