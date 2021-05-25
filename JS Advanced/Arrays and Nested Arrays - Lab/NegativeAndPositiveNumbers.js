function numbers(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element < 0) {
            arr.unshift(element);
        } else {
            arr.push(element);
        }
    }

    for (const number of arr) {
        console.log(number);
    }
}
numbers([3, -2, 0, -1]);