// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; // Number

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123'); // uniqueness
const anotherId = Symbol('123');
console.log(id == anotherId);

const bigNumber = 23153465465454654n; //BigInt (ends with n)


// Reference (Non primitive)
// Array, Objects, Functions
const heroes = ["IronMan", "CaptainAmerica", "Thor"];

let myObj = {
    name: "Amitesh",
    age: 22,
} // everything inside curly braces is object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);