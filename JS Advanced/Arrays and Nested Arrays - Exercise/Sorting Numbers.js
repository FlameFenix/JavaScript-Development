function sortingNums(input) {
    input.sort((a, b) => a - b);
    let newArr = [];
    while(input.length > 0) {

        newArr.push(input.shift());
        newArr.push(input.pop());
    }

    return newArr;
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));