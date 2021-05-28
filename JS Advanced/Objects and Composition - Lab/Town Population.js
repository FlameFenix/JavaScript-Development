function townsPopulation(input) {
    const obj = {};
    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(' <-> ');
        if(obj[splitted[0]]) {
            obj[splitted[0]] += Number(splitted[1]);
        } else {
            obj[splitted[0]] = Number(splitted[1]);
        }
    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`)
    }
}

townsPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);