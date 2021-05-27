function subsequence(input) {
    let newArr = [];
    newArr.push(input[0]);
    for (let i = 0; i < input.length; i++) {
        if (newArr[newArr.length - 1] < input[i]) {
            newArr.push(input[i]);
        }
    }

    return newArr;

}

console.log(subsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
