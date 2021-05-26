function printEveryNthElement(array, element) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(i % element == 0) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);