function getInfo() {
    const stopIdValue = document.getElementById('stopId').value;
    const stopNameDiv = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdValue}`

    busesUl.innerHTML = '';
    fetch(url, {method: 'GET'})
        .then((result) => result.json())
        .then((data) => {
            stopNameDiv.textContent = data.name;
            for (const key in data.buses) {
                const busLi = document.createElement(`li`);
                busLi.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`

                busesUl.appendChild(busLi);
            }
        })
        .catch((err) => {
            stopNameDiv.textContent = 'Error';
        });

}