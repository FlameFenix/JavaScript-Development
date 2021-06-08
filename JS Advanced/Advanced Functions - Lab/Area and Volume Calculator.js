function solve(area, vol, input) {

    let arr = [];
    let coordinates = JSON.parse(input);

    for (const coordinate of coordinates) { 
        let obj = {
            area: area.call(coordinate),
            volume: vol.call(coordinate),
        }
        arr.push(obj);
    }
    
    return arr;
}

function area() {
    return Math.abs(this.x * this.y);
}


function vol() {
    return Math.abs(this.x * this.y * this.z);
}

console.log(solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'));
