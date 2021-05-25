function sumFirstAndLast(input) {
    let sum = 0;
    if (input.length > 0) {
        sum = Number(input[0]) + Number(input[input.length - 1]);
    }
    console.log(sum);
}

sumFirstAndLast(['5', '10']);