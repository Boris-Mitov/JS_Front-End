function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const phoneBookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createPhoneBookEntryHandler);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL, { method: 'GET' });
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);

            phoneBookContainer.innerHTML = '';

            for (const { person, phone, _id } of phoneBookData) {
                const liElement = document.createElement('li');
                const deleteBtnElement = document.createElement('button');

                deleteBtnElement.textContent = "Delete"
                deleteBtnElement.id = _id;
                deleteBtnElement.addEventListener('click', deleteEntryHandler);

                liElement.textContent = `${person}: ${phone}`;
                liElement.appendChild(deleteBtnElement);

                phoneBookContainer.appendChild(liElement);


            }
        } catch (err) {
            console.log(err);
        }

    }

    async function createPhoneBookEntryHandler() {
        try {
            const newPersonElement = document.getElementById('person');
            const newPhoneElement = document.getElementById('phone');

            const phoneBookEntryCreate = await fetch(BASE_URL, {
                method: 'POST', body: JSON.stringify({
                    person: newPersonElement.value,
                    phone: newPhoneElement.value
                })
            });

            loadPhoneBookHandler();
            newPersonElement.value = '';
            newPhoneElement.value = '';
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteEntryHandler() {
        try {
            const id = this.id;
            const phoneBookEntryDelete = await fetch(BASE_URL + id, { method: 'DELETE' });
            loadPhoneBookHandler();
        } catch (error) {
            console.log(error);
        }
    }

}

attachEvents();