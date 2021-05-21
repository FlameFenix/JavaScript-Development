function roadRadar(speed, zone) {
    let output = '';
    let limit = 0;
    let exceeded = 0;
    if (zone === 'motorway') {
        limit = 130;
        output = `Driving ${speed} km/h in a ${limit} zone`;
    } else if (zone === 'interstate') {
        limit = 90;
        output = `Driving ${speed} km/h in a ${limit} zone`;
    } else if (zone === 'city') {
        limit = 50;
        output = `Driving ${speed} km/h in a ${limit} zone`;
    } else if (zone === 'residential') {
        limit = 20;
        output = `Driving ${speed} km/h in a ${limit} zone`;
    }

    exceeded = speed - limit;

    if(exceeded > 0 && exceeded <= 20) {
        output = `The speed is ${exceeded} km/h faster than the allowed speed of ${limit} - speeding`;
    } else if(exceeded > 20 && exceeded <= 40) {
        output = `The speed is ${exceeded} km/h faster than the allowed speed of ${limit} - excessive speeding`;
    } else if(exceeded > 40){
        output = `The speed is ${exceeded} km/h faster than the allowed speed of ${limit} - reckless driving`;
    }

    console.log(output);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');