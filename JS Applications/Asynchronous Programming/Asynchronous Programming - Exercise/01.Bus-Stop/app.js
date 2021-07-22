function getInfo() {
    let stopId = document.getElementById('stopId');
    let url = 'http://localhost:3030/jsonstore/bus/businfo/';

    let stopName = document.getElementById('stopName');
    let ulBuses = document.getElementById('buses');

    fetch(url + stopId.value)
        .then(response => response.json())
        .then(x => {
            stopName.textContent = x.name;         
            for (const bus in x.buses) {
                let busId = bus;
                let time = x.buses[bus];
                let liBus = document.createElement('li');
                liBus.textContent = `Bus ${busId} arrives in ${time}`;
                ulBuses.appendChild(liBus);
            }
        })
        .catch(error => stopName.textContent = 'Error');
}