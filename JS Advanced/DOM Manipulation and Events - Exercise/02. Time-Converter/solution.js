function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', () => {
        hours.value = Number(days.value) * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    });

    hoursBtn.addEventListener('click', () => {
        hours.value = Number(hours.value);
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    });

    minutesBtn.addEventListener('click', () => {
        minutes.value = Number(minutes.value);
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
        days.value = hours.value / 24;    
    });

    secondsBtn.addEventListener('click', () => {
        seconds.value = Number(seconds.value);
        minutes.value = seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
           
    });
}