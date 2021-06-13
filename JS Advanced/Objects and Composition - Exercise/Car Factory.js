function carFactory(input) {
    const obj = {
        model: input.model,
        engine: engineCalculate(input.power),
        carriage: {
            type: input.carriage,
            color: input.color },
        wheels: getWheelsSize(input),
    };

    function engineCalculate(powerRequest) {
        let power = Number(powerRequest);
        if(power < 105) {
            power = 90;
            vol =  1800;
        }
        else if(power > 105 && power < 160) {
            power = 120;
            vol =  2400;
        } else if(power >= 160) {
            power = 200;
            vol = 3500;
        }

        return {power: power, volume: vol};
    }

    function getWheelsSize(input) {
        let wheel = input.wheelsize % 2 != 0 ? input.wheelsize : Math.trunc(input.wheelsize - 1);
        return [wheel, wheel, wheel, wheel];
    }

    return obj;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));