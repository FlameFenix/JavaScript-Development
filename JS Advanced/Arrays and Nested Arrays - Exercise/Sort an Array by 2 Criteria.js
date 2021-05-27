function twoCriterias(input) {
    input.sort((a, b) => {
        let stringA = a.toUpperCase();
        let stringB = b.toUpperCase();

        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            if(stringA > stringB) {
                return 1;
            } else if(stringA < stringB) {
                return -1;
            } else {
                return 0;
            }
        }
    })
    return input.join('\n');
}

console.log(twoCriterias(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));