class Human {
    constructor(name, age, dateOfBirth) {
        if (typeof name != 'string') {
            throw Error('Name must be a string');
        }
        if (typeof age != "number" || age < 0) {
            throw Error('Age must be a number and not less than zero');
        }
        if (typeof dateOfBirth != 'number' && typeof age != 'number') {
            throw Error('DateOfBirth must be a number or a string');
        }
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `name: ${this.name}, age: ${this.age}, date of birth: ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        if (typeof salary != 'number' || salary < 0) {
            throw Error('Salary must be a number and not less than zero');
        }
        if (typeof department != 'string') {
            throw Error('Department must be a string');
        }
        try {
            super(name, age, dateOfBirth);
        } catch (err) {
            throw err;
        }
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return `${super.displayInfo()}, salary: ${this.salary}, department: ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        try {
            super(name, age, dateOfBirth, salary, department);
        } catch (err) {
            throw err;
        }
        this.developers = [];
    }

    addDeveloper(developer) {
        if (!(developer instanceof Developer)) {
            throw Error('Adding developer must be instance of Developer');
        }
        if (this.developers.indexOf(developer) > -1) {
            throw Error('Adding developer is already into array');
        }
        this.developers.push(developer);
    }

    removeDeveloper(developer) {
        if (!(developer instanceof Developer)) {
            throw Error('Removing developer must be instance of Developer');
        }
        if (this.developers.indexOf(developer) == -1) {
            throw Error('There is no this developer into array');
        }
        this.developers.splice(this.developers.indexOf(developer), 1);
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager = undefined) {
        try {
            super(name, age, dateOfBirth, salary, department);
        } catch (err) {
            throw err;
        }
        if ( !(manager instanceof Manager) && manager != undefined ) {
            throw Error('Setting manager must be instance of Manager');
        }
        this.manager = manager;
    }

    setManager(manager) {
        if ( !(manager instanceof Manager)) {
            throw Error('Setting manager must be instance of Manager');
        }
        this.manager = manager;
    }
}


/*
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
*/