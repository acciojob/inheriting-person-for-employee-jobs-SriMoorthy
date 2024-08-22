// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding the greet method to Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Step 2: Employee function constructor
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Inherit properties from Person
    this.jobTitle = jobTitle;
}

// Inherit methods from Person's prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding the jobGreet method to Employee's prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

() => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
        const Person = win.Person;
        const Employee = win.Employee;

        const person = new Person("Alice", 25);
        const employee = new Employee("Bob", 30, "Manager");

        cy.stub(win.console, "log").as("consoleLog");

        person.greet();
        cy.get("@consoleLog").should("be.calledWith", `Hello, my name is Alice, I am 25 years old.`);

        employee.jobGreet();
        cy.get("@consoleLog").should("be.calledWith", `Hello, my name is Bob, I am 30 years old, and my job title is Manager.`);
    });
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
