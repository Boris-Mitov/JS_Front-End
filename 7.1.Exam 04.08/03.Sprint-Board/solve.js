// TODO:
function attachEvents() {
    const loadBoardButtonElement = document.getElementById('load-board-btn');
    const addTaskButtonElement = document.getElementById('create-task-btn');
    const addTaskTitleElement = document.getElementById('title');
    const addTaskDescription = document.getElementById('description');
    const allTaskListsElements = Array.from(document.getElementsByClassName('task-list'));
    const TASKS_URL = 'http://localhost:3030/jsonstore/tasks/';

    loadBoardButtonElement.addEventListener('click', loadBoardHandler);
    addTaskButtonElement.addEventListener('click', addTaskHandler);

    async function loadBoardHandler() {
        allTaskListsElements.forEach(element => element.innerHTML = '');

        try {
            const loadingAllTasksRes = await fetch(TASKS_URL, { method: 'GET' });
            let allTasksData = await loadingAllTasksRes.json();
            let taskTypeElement = null;
            let buttonTypeValue = '';
            let buttonFunction = null;


            for (const key in allTasksData) {
                if (allTasksData[key].status === 'ToDo') {
                    taskTypeElement = document.getElementById('todo-section');
                    buttonTypeValue = 'Move to In Progress';
                    buttonFunction = moveToInProgress;
                } else if (allTasksData[key].status === 'In Progress') {
                    taskTypeElement = document.getElementById('in-progress-section');
                    buttonTypeValue = 'Move to Code Review';
                    buttonFunction = moveToCodeReview;
                } else if (allTasksData[key].status === 'Code Review') {
                    taskTypeElement = document.getElementById('code-review-section');
                    buttonTypeValue = 'Move to Done';
                    buttonFunction = moveToDone;
                } else if (allTasksData[key].status === 'Done') {
                    taskTypeElement = document.getElementById('done-section');
                    buttonTypeValue = 'Close';
                    buttonFunction = closeAndDelete;
                }

                const taskContainerUlElement = taskTypeElement.getElementsByClassName('task-list')[0];

                const taskLiElement = document.createElement('li');
                const titleH3Element = document.createElement('h3');
                const descriptionParElement = document.createElement('p');
                const buttonElement = document.createElement('button');

                descriptionParElement.textContent = allTasksData[key].description;

                buttonElement.textContent = buttonTypeValue;
                buttonElement.id = allTasksData[key]._id;
                buttonElement.addEventListener('click', buttonFunction);

                titleH3Element.textContent = allTasksData[key].title;
                taskLiElement.classList.add('task');

                taskLiElement.appendChild(titleH3Element);
                taskLiElement.appendChild(descriptionParElement);
                taskLiElement.appendChild(buttonElement);

                taskContainerUlElement.appendChild(taskLiElement);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function addTaskHandler() {
        try {
            const taskTitle = addTaskTitleElement.value;
            const taskDescription = addTaskDescription.value;
            const taskStatus = 'ToDo';
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    title: taskTitle,
                    description: taskDescription,
                    status: taskStatus,
                })
            }

            const addingTaskToRes = await fetch(TASKS_URL, httpHeaders);

            addTaskTitleElement.value = '';
            addTaskDescription.value = '';
            loadBoardHandler();
        } catch (error) {
            console.log(error);
        }
    }

    async function moveToInProgress() {
        const taskId = this.id;

        try {
            const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({
                    status: 'In Progress',
                })
            }

            const addingTaskToRes = await fetch(TASKS_URL + taskId, httpHeaders);

            loadBoardHandler();
        } catch (error) {
            console.log(error);
        }
    }

    async function moveToCodeReview() {
        const taskId = this.id;

        try {
            const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({
                    status: 'Code Review',
                })
            }

            const addingTaskToRes = await fetch(TASKS_URL + taskId, httpHeaders);

            loadBoardHandler();
        } catch (error) {
            console.log(error);
        }
    }

    async function moveToDone() {
        const taskId = this.id;

        try {
            const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({
                    status: 'Done',
                })
            }

            const addingTaskToRes = await fetch(TASKS_URL + taskId, httpHeaders);

            loadBoardHandler();
        } catch (error) {
            console.log(error);
        }
    }

    async function closeAndDelete() {
        const taskId = this.id;
        try {
            const deleteBookEntry = await fetch(TASKS_URL + taskId, { method: 'DELETE' });
            loadBoardHandler();
        } catch (error) {
            console.log(error);
        }
    }

}

attachEvents();