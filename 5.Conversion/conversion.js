let score = "amitesh"; // true, undefined , null, 33abc , 33
console.log(typeof score);

let valueInNumber = Number(score); // capital format of data type
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN => Not a Number

// "33" => 33
// "33" => NaN
// true => 1; false => 0

let isLoggedIn = "Amitesh"; // "" , 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Amitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => "33"