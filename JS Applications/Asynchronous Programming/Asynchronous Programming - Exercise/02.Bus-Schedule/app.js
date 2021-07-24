function solve() {

    let url = 'http://localhost:3030/jsonstore/bus/schedule/';

    let currentStopId = 'depot1';
    let previousStopId = '';
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');
    let spanElement = document.querySelector('.info');

    function depart() {
        fetch(url + currentStopId)
            .then(res => res.json())
            .then(data => {
                previousStopId = currentStopId;
                currentStopId = data.next;
                spanElement.textContent = `Next stop ${data.name}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
            }).catch(err => {
                spanElement.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            });
    }

    function arrive() {

        fetch(url + previousStopId)
            .then(res => res.json())
            .then(data => {
                spanElement.textContent = `Arriving at ${data.name}`;
                departButton.disabled = false;
                arriveButton.disabled = true;
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();