function smallestTwoNumbers(input) {
    input.sort((a, b) => a - b);
    input.length = 2;
    console.log(input.join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);