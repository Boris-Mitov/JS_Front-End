function create(words) {
   const divContentElement = document.getElementById('content');
   for (const word of words) {
      const divSectionElement = document.createElement('div');
      const pSectionElement = document.createElement('p');

      pSectionElement.style.display = 'none';
      pSectionElement.textContent = word;

      divSectionElement.appendChild(pSectionElement);
      divSectionElement.addEventListener('click', (event) => pSectionElement.style.display = 'block');
      
      divContentElement.appendChild(divSectionElement);
   }
}