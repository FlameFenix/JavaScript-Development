function wordsUppercase(input) {
    let re = /\w+/gm;
    let str = String(input);
    let arr = [];
    let filtered = [];
    arr = str.match(re);

    for (const word of arr) {
        filtered.push(word.toUpperCase());
    }

    console.log(filtered.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');