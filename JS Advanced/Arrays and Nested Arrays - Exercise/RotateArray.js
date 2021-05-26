function rotateArray(input, count) {
    for (let i = 0; i < count; i++) {
        let firstElement = input[input.length - 1];
        input = input.slice(0, input.length - 1);
        input.unshift(firstElement);
    }
    console.log(input.join(' '));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)