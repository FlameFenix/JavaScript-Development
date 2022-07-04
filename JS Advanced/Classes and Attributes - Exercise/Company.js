class Company {
    constructor() {
        this.departments = {
        };
    }

    addEmployee(username, salary, position, department) {
        if (username == undefined || username == '' || username == null
            || salary < 0
            || position == undefined || position == '' || position == null
            || department == undefined || department == '' || department == null)  {
                throw new Error("Invalid input!");
            } else { 
                return `New employee is hired. Name: ${username}. Position: ${position}`
            }
    }
}