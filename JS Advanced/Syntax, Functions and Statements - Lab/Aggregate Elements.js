function aggregateElements(input) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        sum += element;
        inverseSum += 1 / element;
        concat += element;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregateElements([2,4,8,16]);