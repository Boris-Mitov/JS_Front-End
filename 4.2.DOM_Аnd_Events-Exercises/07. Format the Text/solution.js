function solve() {
  const inputElement = document.getElementById('input');
  const divOutput = document.getElementById('output')

  let sentences = inputElement.value.split('.');
  sentences.pop();
  
  while (sentences.length > 0) {
    debugger;
    const newParagraph = document.createElement('p');
    newParagraph.textContent = sentences.splice(0, 3).map((p) => p.trimStart()).join('.') + '.';
    divOutput.appendChild(newParagraph);
  }
}

