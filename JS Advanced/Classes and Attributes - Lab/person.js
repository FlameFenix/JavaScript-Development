class person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let newPerson = new person('Yordan', 'Dimitrov', 28, 'flamefenix@abv.bg');
console.log(newPerson.toString());