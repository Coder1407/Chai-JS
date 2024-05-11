const name = "amitesh";
const repoCount = 10;

// console.log(name + repoCount + "Value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Amitesh-sh-ar-ma');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newStringOne = "  Amitesh "
console.log(newStringOne.trim());

const url = "https://amitesh.com/amitesh%20sharma";
console.log(url.replace('%20','-'));
console.log(url.includes('amitesh'));
console.log(url.includes('tima'));

console.log(gameName.split('-'));