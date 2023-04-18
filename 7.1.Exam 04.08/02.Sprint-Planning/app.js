window.addEventListener('load', solve);

function solve() {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const labelElement = document.getElementById('label');
    const pointsElement = document.getElementById('points');
    const assigneeElement = document.getElementById('assignee');
    const createTaskButtonElement = document.getElementById('create-task-btn');
    const deleteTaskButtonElement = document.getElementById('delete-task-btn');
    const containerElement = document.getElementById('tasks-section');
    const totalPointsElement = document.getElementById('total-sprint-points');
    const taskIdHiddenElement = document.getElementById('task-id');

    let taskCounter = 0;
    let totalPoints = 0;

    createTaskButtonElement.addEventListener('click', createTaskHandler);

    function createTaskHandler() {
        if (titleElement.value !== '' && descriptionElement.value !== '' && pointsElement.value !== '' && assigneeElement.value !== '') {
            const article = document.createElement('article');
            const labelDiv = document.createElement('div');
            const titleH3 = document.createElement('h3');
            const descriptionP = document.createElement('p');
            const pointsDiv = document.createElement('div');
            const assigneeDiv = document.createElement('div');
            const actionsDiv = document.createElement('div');
            const deleteButton = document.createElement('button');

            taskCounter++;

            article.classList.add('task-card');
            article.id = `task-${taskCounter}`;

            let labelIcon = '';
            let labelClass = '';

            if (labelElement.value === "Feature") {
                labelIcon = '&#8865;';
                labelClass = 'feature';
            } else if (labelElement.value === "Low Priority Bug") {
                labelIcon = '&#9737;';
                labelClass = 'low-priority';
            } else if (labelElement.value === "High Priority Bug") {
                labelIcon = '&#9888;';
                labelClass = 'high-priority';
            }

            labelDiv.classList.add('task-card-label');
            labelDiv.classList.add(`${labelClass}`);
            labelDiv.innerHTML = `${labelElement.value} ${labelIcon}`;

            titleH3.classList.add('task-card-title');
            titleH3.textContent = titleElement.value;

            descriptionP.classList.add('task-card-description');
            descriptionP.textContent = descriptionElement.value;

            pointsDiv.classList.add('task-card-points');
            pointsDiv.textContent = pointsElement.value;
            totalPoints += Number(pointsElement.value);
            totalPointsElement.textContent = `Total Points ${totalPoints}pts`


            assigneeDiv.classList.add('task-card-assignee');
            assigneeDiv.textContent = assigneeElement.value;

            actionsDiv.classList.add('task-card-actions');

            deleteButton.textContent = 'Delete';

            deleteButton.label = labelElement.value;
            deleteButton.addEventListener('click', deleteButtonHandler);

            actionsDiv.appendChild(deleteButton);

            article.appendChild(labelDiv);
            article.appendChild(titleH3);
            article.appendChild(descriptionP);
            article.appendChild(pointsDiv);
            article.appendChild(assigneeDiv);
            article.appendChild(actionsDiv);

            containerElement.appendChild(article);

            titleElement.value = '';
            descriptionElement.value = '';
            labelElement.value = 'Feature';
            pointsElement.value = '';
            assigneeElement.value = '';
        }
    }

    function deleteButtonHandler() {
        taskIdHiddenElement.value = this.parentNode.parentNode.id;
        const currentTask = document.getElementById(taskIdHiddenElement.value);

        titleElement.value = currentTask.children[1].textContent;
        titleElement.disabled = true;
        descriptionElement.value = currentTask.children[2].textContent;
        descriptionElement.disabled = true;
        labelElement.value = this.label;
        labelElement.disabled = true;
        pointsElement.value = Number(currentTask.children[3].textContent);
        pointsElement.disabled = true;
        assigneeElement.value = currentTask.children[4].textContent;
        assigneeElement.disabled = true;

        createTaskButtonElement.disabled = true;
        deleteTaskButtonElement.disabled = false;

        deleteTaskButtonElement.addEventListener('click', deleteTaskButtonHandler);
    }

    function deleteTaskButtonHandler() {
        const currentTask = document.getElementById(taskIdHiddenElement.value);
        
        totalPoints -= Number(currentTask.children[3].textContent);

        totalPointsElement.textContent = `Total Points ${totalPoints}pts`

        currentTask.parentNode.removeChild(currentTask);
        titleElement.value = '';
        descriptionElement.value = '';
        labelElement.value = 'Feature';
        pointsElement.value = '';
        assigneeElement.value = '';

        createTaskButtonElement.disabled = false;
        deleteTaskButtonElement.disabled = true;

        titleElement.disabled = false;
        descriptionElement.disabled = false;
        labelElement.disabled = false;
        pointsElement.disabled = false;
        assigneeElement.disabled = false;
        
        taskIdHiddenElement.value = '';
    }
}