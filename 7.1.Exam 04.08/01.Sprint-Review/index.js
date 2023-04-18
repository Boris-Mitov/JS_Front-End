function sprintReview(data) {
    let boardElementsCount = Number(data[0]);

    let board = {};

    for (let i = 1; i <= boardElementsCount; i++) {
        let currentData = data[i].split(':');
        let assignee = currentData[0];
        let taskId = currentData[1];
        let title = currentData[2];
        let status = currentData[3];
        let estimatedPoints = currentData[4];

        if (board[assignee]) {
            board[assignee].push({ taskId, title, status, estimatedPoints });
        } else {
            board[assignee] = [];
            board[assignee].push({ taskId, title, status, estimatedPoints });
        }

    }

    data.splice(0, (1 + boardElementsCount));

    for (const commandData of data) {
        let commandElements = commandData.split(':');
        let command = commandElements[0];
        let targetAssignee = commandElements[1];


        if (board[targetAssignee]) {
            switch (command) {
                case 'Add New':
                    let currentTaskId = commandElements[2];
                    let currentTitle = commandElements[3];
                    let currentStatus = commandElements[4];
                    let currentEstimatedPoints = commandElements[5];

                    board[targetAssignee].push({ taskId: currentTaskId, title: currentTitle, status: currentStatus, estimatedPoints: currentEstimatedPoints });
                    break;
                case 'Change Status':
                    for (const task of board[targetAssignee]) {
                        if (task['taskId'] === commandElements[2]) {
                            task['status'] = commandElements[3];
                        } else {
                            console.log(`Task with ID ${commandElements[2]} does not exist for ${targetAssignee}!`)
                        }
                    }

                    break;
                case 'Remove Task':
                    if (board[targetAssignee].length > Number(commandElements[2]) && Number(commandElements[2] >= 0)) {
                        board[targetAssignee].splice(Number(commandElements[2]), 1);
                    } else {
                        console.log('Index is out of range!');
                    }
                    break;
            }
        } else {
            switch (command) {
                case 'Add New':
                    console.log(`Assignee ${targetAssignee} does not exist on the board!`);
                    break;
                case 'Change Status':
                    console.log(`Assignee ${targetAssignee} does not exist on the board!`);
                    break;
                case 'Remove Task':
                    console.log(`Assignee ${targetAssignee} does not exist on the board!`);
                    break;
            }
        }
    }

    

    let toDoCount = 0;
    let inProgressCount = 0;
    let codeReviewCount = 0;
    let donePoints = 0;

    for (const assignee in board) {
        for (const task of board[assignee]) {
            switch (task.status) {
                case 'ToDo':
                    toDoCount += Number(task.estimatedPoints);
                    break;
                case 'In Progress':
                    inProgressCount += Number(task.estimatedPoints);
                    break;
                case 'Code Review':
                    codeReviewCount += Number(task.estimatedPoints);
                    break;
                case 'Done':
                    donePoints += Number(task.estimatedPoints);
                    break;
            }
        }
    }

    console.log(`ToDo: ${toDoCount}pts`);
    console.log(`In Progress: ${inProgressCount}pts`);
    console.log(`Code Review: ${codeReviewCount}pts`);
    console.log(`Done Points: ${donePoints}pts`);


    if (donePoints >= (toDoCount + inProgressCount + codeReviewCount)) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}

// sprintReview(
//     [
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]

// );

    sprintReview(
        [
            '4',
            'Kiril:BOP-1213:Fix Typo:Done:1',
            'Peter:BOP-1214:New Products Page:In Progress:2',
            'Mariya:BOP-1215:Setup Routing:ToDo:8',
            'Georgi:BOP-1216:Add Business Card:Code Review:3',
            'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
            'Change Status:Georgi:BOP-1216:Done',
            'Change Status:Will:BOP-1212:In Progress',
            'Remove Task:Georgi:3',
            'Change Status:Mariya:BOP-1215:Done',
        ]

    );