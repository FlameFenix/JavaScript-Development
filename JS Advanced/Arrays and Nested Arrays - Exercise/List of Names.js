function listOfNames(input) {
    input.sort();
    for (let i = 0; i < input.length; i++) {
        console.log(`${i + 1}.${input[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);