function solution() {
    let result = '';

    let print = () => { console.log(result) };
    
    return {
        append: function (input) {
            result += input;
        },

        removeStart: function (n) {
            result = result.substring(n);
        },
        removeEnd: function (n) {
            result = result.substring(0, result.length - n);
        },
        print
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
