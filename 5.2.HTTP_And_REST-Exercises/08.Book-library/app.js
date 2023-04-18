function attachEvents() {
  const LIBRARY_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const loadButtonElement = document.getElementById('loadBooks');
  const booksBodyContainer = document.querySelector('table > tbody');
  const newBookElements = document.querySelectorAll('#form > input');
  const submitButton = document.querySelector('#form > button');
  const formTitleElement = document.querySelector('#form > h3');
  let editBookId = null;

  loadButtonElement.addEventListener('click', loadAllBooks);
  submitButton.addEventListener('click', submitBook);

  async function loadAllBooks() {
    try {
      booksBodyContainer.innerHTML = '';
      const loadingAllBooksRes = await fetch(LIBRARY_URL, { method: 'GET' });
      let allBooksData = await loadingAllBooksRes.json();

      for (const key in allBooksData) {
        const newTrElement = document.createElement('tr');
        const bookTdElement = document.createElement('td')
        const authorTdElement = document.createElement('td')
        const buttonsTdElement = document.createElement('td')
        const editButtonElement = document.createElement('button');
        const deleteButtonElement = document.createElement('button');

        editBookId = key;

        deleteButtonElement.addEventListener('click', deleteBook);
        deleteButtonElement.textContent = "Delete";

        editButtonElement.addEventListener('click', () => {
          newBookElements[0].value = allBooksData[key].title;
          newBookElements[1].value = allBooksData[key].author;
          formTitleElement.textContent = "Edit FORM";
          submitButton.textContent = 'Save';
        });

        editButtonElement.textContent = "Edit";

        bookTdElement.textContent = allBooksData[key].title;
        authorTdElement.textContent = allBooksData[key].author;

        buttonsTdElement.appendChild(editButtonElement);
        buttonsTdElement.appendChild(deleteButtonElement);
        newTrElement.appendChild(bookTdElement);
        newTrElement.appendChild(authorTdElement);
        newTrElement.appendChild(buttonsTdElement);
        booksBodyContainer.appendChild(newTrElement);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function submitBook() {
    try {
      const newBookTitle = newBookElements[0].value;
      const newBookAuthor = newBookElements[1].value;
      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({
          title: newBookTitle,
          author: newBookAuthor
        })
      }

      let url = LIBRARY_URL;

      if (formTitleElement.textContent === "Edit FORM") {
        httpHeaders.method = "PUT";
        url += editBookId;
      }

      const addingBookToRes = await fetch(url, httpHeaders);

      loadAllBooks();
      if (formTitleElement.textContent === "Edit FORM") {
        formTitleElement.textContent = "FORM";
        submitButton.textContent = "Submit";
      }
      newBookElements[0].value = '';
      newBookElements[1].value = '';
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook() {
    try {
      const deleteBookEntry = await fetch(LIBRARY_URL + editBookId, { method: 'DELETE' });
      loadAllBooks();
    } catch (error) {
      console.log(error);
    }
  }
}

attachEvents();