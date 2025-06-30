"use strict";
// INSTALL TYPESCRIPT GLOBALLY
// npm install -g typescript
// RUN APP:
// tsc --watch
// nodemon index.js
// Basic Types
let number = 32;
let string = 'John';
let boolean = true;
let any = 'this could be any type';
let arrayOfNumbers = [1, 2, 3];
let arrayOfStrings = ['a', 'b', 'c'];
let arrayOfAny = [1, 'a', true];
let arrayOfObjects = [{ a: 1 }, { b: 2 }];
let tuple = ['a', 1];
let tupleArray = [
    ['a', 1],
    ['b', 2],
];
// Union
let union = 'a';
union = 1;
const user = {
    name: 'Jack',
    age: 32,
};
// Array of my defined objects
const arrayOfUsers = [
    {
        name: 'Jack',
        age: 32,
    },
    {
        name: 'John',
        age: 47,
    },
];
// Functions
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => a - b;
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
user1.age = 47;
// When implementing a function from an interface, all types must match the interface
const multiply = (a, b) => a * b;
// Type assertion (when you know the type of a variable)
// TIP: Try to avoid using any type
let customerID = '123';
let customerIDAsNumber = customerID;
let customerIDAsNumber2 = customerID;
// ------------------------------------------------------------
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(1, 'Jack');
const person2 = new Person(2, 'John');
// TIP: class properties are public by default. we can also define private and protected properties (those will be only accessible within the class and its subclasses)
// e.g. private id: number, protected name: string
// Extending Classes (Subclasses)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    // Overriding a method
    register() {
        return `${this.name} is now registered as an employee`;
    }
}
const employee1 = new Employee(1, 'James', 'Developer');
console.log(employee1.register());
class Fruit {
    constructor(name, isFavorite) {
        this.name = name;
        this.isFavorite = isFavorite;
    }
    favorite() {
        if (this.isFavorite) {
            return `${this.name} is my favorite fruit`;
        }
        else {
            return `${this.name} is my NOT favorite fruit`;
        }
    }
}
const banana = new Fruit('banana', false);
const mango = new Fruit('mango', true);
// Generics (allow us to create reusable components)
// <T> is a placeholder that allows to later define the type of the generic
function getId(id) {
    return id;
}
const numberId = getId(1); // this function call will only accept numbers
const stringId = getId('1'); // this function call will only accept str
// Enum - allows to define a set of enumerated named constants
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Blue; // 2
let colorName = Color[2]; // 'Blue'
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let color2 = Color2.Blue; // 3
var Color3;
(function (Color3) {
    Color3["Red"] = "#ff0000";
    Color3["Green"] = "#00ff00";
    Color3["Blue"] = "#0000ff";
})(Color3 || (Color3 = {}));
let color3 = Color3.Blue; // '#0000ff'
// Record - allows to create an object type with a specific set of keys and values
let products = {
    'MacBook Air': 12,
    'AirPods Pro': 18,
};
let themeSwitch = 'light'; // light | dark
// Return Type - extracts the return type of a function
function getUser() {
    return {
        name: 'Jane',
        age: 28,
    };
}
let userReturnType = {
    name: 'Bob',
    age: 25,
};
// Parameters - extracts the parameter types of a function
function add2(a, b) {
    return a + b;
}
let addParams = [5, 10]; // [number, number]
// Use addParams to call the function
let sum = add2(...addParams);
console.log(sum); // 15, (5 + 10)
let user4 = {
    firstName: 'John',
    lastName: 'Doe',
};
// Error: Cannot assign to 'firstName' because it is a read-only property:
// user4.firstName = 'Jane'
