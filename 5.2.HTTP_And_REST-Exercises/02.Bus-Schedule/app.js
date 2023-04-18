function solve() {
    const nextStopLink = 'http://localhost:3030/jsonstore/bus/schedule/e';
    const infoElement = document.getElementById('info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let nextStopName = 'Depot';
    let nextStopCode = '0361'

    function depart() {
        infoElement.children[0].textContent = 'Next stop ' + nextStopName;
        departButton.setAttribute('disabled', 'true');
        arriveButton.removeAttribute('disabled');
    }

    async function arrive() {
        departButton.removeAttribute('disabled');
        arriveButton.setAttribute('disabled', 'true');
        infoElement.children[0].textContent = 'Arriving at ' + nextStopName;
        fetch(nextStopLink + nextStopCode, { method: 'GET' })
            .then((result) => result.json())
            .then((data) => {
                nextStopName = data.name;
                nextStopCode = data.next;
            })
            .catch((err) => {
                nextStopName = 'Error';
                departButton.setAttribute('disabled', 'true');
                arriveButton.setAttribute('disabled', 'true');
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();