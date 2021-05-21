function timeToWalk(steps, lengthOfStep, studentSpeed) {

    let metersToHome = steps * lengthOfStep;
    let hours = Math.trunc((metersToHome / (studentSpeed * 1000)));
    let minutes = ((metersToHome / (studentSpeed * 1000)) * 60);
    let seconds = (((metersToHome / (studentSpeed * 1000)) * 60) % 1) * 60;
    let restMinutes = Math.floor(metersToHome / 500);
    
    minutes += restMinutes; 

    console.log(`${hours.toString().padStart(2, 0)}:${Math.floor(minutes).toString().padStart(2, 0)}:${Math.round(seconds).toString().padStart(2, 0)}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);