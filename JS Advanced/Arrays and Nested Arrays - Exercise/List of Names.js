function listOfNames(input) {
    input.sort((a, b) => {
        if (a.toUpperCase() > b.toUpperCase()) {
            return 1;
        } else if (a.toUpperCase() < b.toUpperCase()) {
            return -1;
        }
        return 0;
    });
    for (let i = 0; i < input.length; i++) {
        console.log(`${i + 1}.${input[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);