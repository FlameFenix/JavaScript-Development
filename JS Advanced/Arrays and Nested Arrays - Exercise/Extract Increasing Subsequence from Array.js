function subsequence(input) {
    input = input.map(Number);

    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let currentValue = input[i];
        let biggestValue = newArr[newArr.length - 1];

        if(i == 0) {
            newArr.push(currentValue);
        }

        if(currentValue > biggestValue) {
            newArr.push(currentValue);
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
