function numbersSequence(n, k) {
    let array = [];
    array[0] = 1;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                sum += array[i - j];
            }
        }
        array[i] = sum;
    }

    return array;
}

console.log(numbersSequence(8, 2));