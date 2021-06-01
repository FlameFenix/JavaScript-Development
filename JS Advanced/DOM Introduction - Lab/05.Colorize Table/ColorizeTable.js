function colorize() {

    let arr = document.querySelectorAll('tr:nth-of-type(2n + 0)');
    for (const item of arr) {
        item.style.background = 'Teal';
    }
    // TODO
}