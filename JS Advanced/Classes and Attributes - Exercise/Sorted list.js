class List {

    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(number) {
        this.size++;
        this.list = this.list.sort((a, b) => a - b);
        this.list.push(number);
    }

    remove(index) {
        if (this.checkIndex(index)) {
            this.size--;
            this.list = this.list.sort((a, b) => a - b);
            this.list.splice(index, 1);
        }
    }

    get(index) {
        if (this.checkIndex(index)) {
            this.list = this.list.sort((a, b) => a - b);
            return this.list[index];
        }
    }

    checkIndex(value) {
        return value >= 0 && value < this.list.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

