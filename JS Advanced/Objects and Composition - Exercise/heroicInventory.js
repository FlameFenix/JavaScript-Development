function heroicInventory(input) {
    let objects = [];
    for (let i = 0; i < input.length; i++) {

        let params = input[i].split(' / ');
        let obj = {};

        obj = {
            name: params[0],
            level: Number(params[1]),
            items: params[2] ? params[2].split(', ') : []
        };
        
        objects.push(obj);
    }

    return JSON.stringify(objects);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 /']
));