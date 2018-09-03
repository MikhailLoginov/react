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
        this.developers = [];
    }
    addDeveloper(developer) {
        if (developer instanceof Developer) {
            this.developers.push(developer);
        }
    }
    removeDeveloper(developer) {
        if (developer instanceof Developer) {
            this.developers.splice(this.developers.indexOf(developer), 1);
        }
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

// Example
let petya = new Manager('Petya', 35, 2071983, 100000, 'personal lines');
let vasya = new Developer('Vasiliy', 25, '20-10-1994', 50000, 'frontend', petya);
let misha = new Developer('Mikhail', 25, '20-10-1994', 50000, 'frontend', petya);
petya.addDeveloper(vasya);
petya.addDeveloper(misha);

console.log(petya.developers);

petya.removeDeveloper(misha);

console.log(petya.developers);
console.log(misha.displayInfo());
console.log(petya.displayInfo());