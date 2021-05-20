function sumOfNumbers(n, m) {
    let sum = 0;
    let startIdx = Number(n);
    let endIdx = Number(m);
    for (let i = startIdx; i <= endIdx; i++) {
        const element = i;
        sum += element;
    }

    console.log(sum);
}

sumOfNumbers('-8', '20');