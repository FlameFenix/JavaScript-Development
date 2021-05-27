function subsequence(input) {
    input = input.map(Number);
    let newArr = [];

    if (input.length > 0) {
        newArr.push(input[0]);
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= newArr[newArr.length - 1]) {
            newArr.push(input[i]);
        }
    }

    return newArr;

}

console.log(subsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
));
