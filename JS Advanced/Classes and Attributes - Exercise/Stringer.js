class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    decrease(value) {
        let newStr = '';
        for (let i = 0; i < this.innerString.length - value; i++) {
            const element = this.innerString[i];
            newStr += element;
        }

    }

    increase(value) {
        for (let i = 0; i < innerString.length; i++) {
            const element = innerString[i];
            
        }
    }

    toString() {
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

test.decrease(3);
//console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
