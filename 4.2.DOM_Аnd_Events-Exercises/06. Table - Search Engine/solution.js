function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableCellsElements = Array.from(document.querySelectorAll('tbody td'));
      const searchInput = document.getElementById('searchField');

      tableCellsElements.forEach((cell) => cell.parentElement.classList.remove('select'));

      for (const cell of tableCellsElements) {
         if (cell.textContent.includes(searchInput.value)) {
            cell.parentElement.classList.add('select');
         }
      }
      searchInput.value = '';
   }
}
