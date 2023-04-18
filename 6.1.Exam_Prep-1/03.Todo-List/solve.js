function attachEvents() {
    const TASKS_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadAllButtonElement = document.getElementById('load-button');
    const addButtonElement = document.getElementById('add-button');
    const taskListUlElement = document.getElementById('todo-list');
    const taskInputElement = document.getElementById('title');

    loadAllButtonElement.addEventListener('click', loadAllTasksHandler);
    addButtonElement.addEventListener('click', addTaskHandler);


    async function loadAllTasksHandler(event) {
        if (event) {
            event.preventDefault();
        }

        taskListUlElement.innerHTML = '';

        try {
            const loadingAllTasksRes = await fetch(TASKS_URL, { method: 'GET' });
            let allTasksData = await loadingAllTasksRes.json();

            for (const key in allTasksData) {
                const containerLi = document.createElement('li');
                const taskSpan = document.createElement('span');
                const removeButton = document.createElement('button');
                const editButton = document.createElement('button');

                taskSpan.textContent = allTasksData[key].name;

                removeButton.textContent = 'Remove';
                removeButton.id = key;
                removeButton.addEventListener('click', removeTaskHandler);

                editButton.textContent = 'Edit';


                containerLi.appendChild(taskSpan);
                containerLi.appendChild(removeButton);
                containerLi.appendChild(editButton);

                taskListUlElement.appendChild(containerLi);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function addTaskHandler(event) {
        try {
            event.preventDefault();

            const taskTitle = taskInputElement.value;
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    name: taskTitle,
                })
            }

            const addingTaskToRes = await fetch(TASKS_URL, httpHeaders);

            taskInputElement.value = '';
            loadAllTasksHandler();
        } catch (error) {
            console.log(error);
        }
    }

    async function removeTaskHandler() {
        try {
            const deleteBookEntry = await fetch(TASKS_URL + this.id, { method: 'DELETE' });
            loadAllTasksHandler();
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
