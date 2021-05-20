function sameNumbers(input) {
    const number = input % 10;
    let isEqual = true;
    let sum = 0;
    while (input > 0) {
        let currentNum = input % 10;
        if (number != currentNum) {
            isEqual = false;
        }
        sum += currentNum;
        input = Math.floor(input / 10);
    }
    console.log(isEqual);
    console.log(sum);
}

sameNumbers(1234);