function evenElements(input) {

    let evenNums = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (i % 2 == 0) {
            evenNums.push(input[i]);
        }

    }
    let arrToStr = evenNums.join(' ');
    console.log(arrToStr);
}

evenElements(['5', '10']);