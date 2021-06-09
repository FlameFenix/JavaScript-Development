function sort(input, option) {

    const sort = {
        asc: (input) => input.sort((a, b) => a - b),
        desc: (input) => input.sort((a, b) => b - a),
    };

    return sort[option](input);
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));


