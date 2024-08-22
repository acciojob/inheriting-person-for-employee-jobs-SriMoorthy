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

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
