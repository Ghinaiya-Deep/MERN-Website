// let variable
let y = 20;
console.log(y);

// var variable
var x = 10;
console.log(x);

// const variable
const z = 30;
console.log(z);

// Regular Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Deep"));

// Arrow function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Deep"));

// Array Declarations
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// push methods
fruits.push("orange");

// pop methods
fruits.pop();

// shift methods
fruits.shift();

// unshift methods
fruits.unshift("mango");

// foreach methods
fruits.forEach(fruit => console.log(fruit));

// map methods
let upperFruits = fruits.map(fruit => fruit.toUpperCase());

// reduce methods
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);

// Objects
let person = {
    name: "Deep",
    age: 25,
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(person.greet());

// promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise fulfilled!");
    } else {
        reject("Promise rejected.");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// .then 
let promise = new Promise((resolve, reject) => {
    resolve("Data received!");
});

promise.then(result => {
    console.log(result); 
});

// .catch
let promise = new Promise((resolve, reject) => {
    reject("Error occurred!");
});

promise
    .then(result => console.log(result))  
    .catch(error => console.log(error));  



