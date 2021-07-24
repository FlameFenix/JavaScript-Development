async function attachEvents() {
    let submitButton = document.getElementById('submit');
    let inputLocation = document.getElementById('location');

    submitButton.addEventListener('click', () => {
        let url = 'http://localhost:3030/jsonstore/forecaster/locations';
        let obj = {};

        let symbols = {
            Sunny: '☀',
            "Partly sunny": '⛅',
            Overcast: '☁',
            Rain: '☂',
            Degrees: '°',
        }

        let foreCastDiv = document.getElementById('forecast');
        foreCastDiv.style.display = 'block';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                let objs = Object.values(data)
                obj = objs.find(x => x.name == inputLocation.value);
                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${obj.code}`)
                    .then(res => res.json())
                    .then(data => ({ code: obj.code, data }))
            })
            .then(({ code, data }) => {
                let attachForecast = document.getElementById('current');
                let currentForecastDiv = document.createElement('div');
                currentForecastDiv.classList.add('forecasts');
                let symbolSpan = document.createElement('span');
                symbolSpan.classList.add('symbol');
                symbolSpan.classList.add('condition')
                let condition = document.createElement('span');
                condition.classList.add('condition');
                let locationSpan = document.createElement('span');
                locationSpan.classList.add('forecast-data')
                locationSpan.textContent = data.name;
                let degreesSpan = document.createElement('span');
                degreesSpan.classList.add('forecast-data')
                degreesSpan.textContent = `${data.forecast['high']}${symbols.Degrees}/${data.forecast['low']}${symbols.Degrees}`;
                let wheaterSpan = document.createElement('span');
                wheaterSpan.classList.add('forecast-data')
                wheaterSpan.textContent = `${data.forecast['condition']}`;
                symbolSpan.textContent = symbols[`${wheaterSpan.textContent}`];
                condition.appendChild(locationSpan);
                condition.appendChild(degreesSpan);
                condition.appendChild(wheaterSpan);
                currentForecastDiv.appendChild(symbolSpan);
                currentForecastDiv.appendChild(condition);
                attachForecast.appendChild(currentForecastDiv);
                return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
            })
            .then(res => res.json())
            .then(x => {
                console.log(x);
                x.forecast.forEach(el => {
                    let upcomingDiv = document.getElementById('upcoming');
                    let forecastInfoDiv = document.createElement('div');
                    forecastInfoDiv.classList.add('forecast-info');
                    let upcomingSpan = document.createElement('span');
                    upcomingSpan.classList.add('upcoming');
                    let symbolSpan = document.createElement('span');
                    symbolSpan.classList.add('symbol');
                    symbolSpan.textContent = symbols[el.condition]
                    let degreesSpan = document.createElement('forecast-data');
                    degreesSpan.textContent = `${el['high']}${symbols.Degrees}/${el['low']}${symbols.Degrees}`;
                    let wheaterSpan = document.createElement('forecast-data');
                    wheaterSpan.textContent = `${el.condition}`;

                    upcomingSpan.appendChild(symbolSpan)
                    upcomingSpan.appendChild(degreesSpan)
                    upcomingSpan.appendChild(wheaterSpan)
                    upcomingDiv.appendChild(upcomingSpan);
                });
            })



    })
}

attachEvents();