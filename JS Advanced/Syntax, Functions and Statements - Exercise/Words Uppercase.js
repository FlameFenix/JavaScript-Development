function wordsUppercase(input) {
    let re = /\w+/gm;
    let match = re.test(input);
    let str = String(input);
    let arr = [];
    arr = str.match(re);
    let filtered = [];
    for (const word of arr) {
        filtered.push(word.toUpperCase());
    }

    console.log(filtered.join(', '));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');