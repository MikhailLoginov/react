class Human {
    constructor(name, age, dateOfBirth) {
        this.name = (typeof name == "string") ? name : "";
        this.age = (typeof age == "number") ? age : 0;
        this.dateOfBirth = (typeof dateOfBirth == "number" || 
            typeof dateOfBirth == "string") ? dateOfBirth : "";
    }
    displayInfo() {
        return `name: ${this.name}, age: ${this.age}, date of birth: ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = (typeof salary == "number") ? salary : 0;
        this.department = (typeof department == "string") ? department : "";
    }
    displayInfo() {
        return `${super.displayInfo()}, salary: ${this.salary}, department: ${this.department}`;
    }
}

class Manager extends Employee { 
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = (manager instanceof Manager) ? manager : undefined;
    }
    setManager(manager) {
        if (manager instanceof Manager) {
            this.manager = manager;
        }
    }
}

let Vasya = new Developer('Vasiliy', 25, '20-10-1994', 50000, 'frontend');