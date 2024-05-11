"use strict"; // treat all JS code as newer version (in modern ways)

// alert(3+3) // we are using nodejs, not browser so => error

//Have high code readablity with semicolons
console.log(3+3); 
console.log("Amitesh");

// For refference: https://tc39.es/ecma262/

let name = "amitesh"; // string
let age = 20; //number
let isLoggedIn = false; // boolean
let state; // undefined

// number => 2 to power 53 (range)
// bigint (for bigger numbers)
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assigned yet
// symbol => uniqueness

// object

console.log(typeof "Amitesh");
console.log(typeof age);
console.log(typeof null); // object
console.log(typeof undefined); // undefined