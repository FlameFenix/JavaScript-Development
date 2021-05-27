function twoCriterias(input) {
    input.sort((a, b) => a.length - b.length);
    input.sort((a, b) => {
        let charA = a.toUpperCase()
        let charB = b.toUpperCase()
        if (charA < charB) {
            return -1;
        }
        if (charA > charB) {
            return 1;
        }
        return 0;
    });

    return input;
}

console.log(twoCriterias(['test',
    'Deny',
    'omen',
    'Default']

));