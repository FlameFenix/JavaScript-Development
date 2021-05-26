function addAndRemoveElements(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element === 'add') {
            arr.push(i + 1);
        } else if (element === 'remove') {
            arr.pop();
        }
    }
    if (arr.length > 0) {
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }

}

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);