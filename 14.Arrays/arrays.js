// Array Creation
const myArr = [0,1,2,3,4,5];
console.log(myArr[0]);

const myHeros = ["Batman", "IronMan", "Thor"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[2]);

// Array Methods
myArr.push(6);
myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9); //adds 9 in front of the array
console.log(myArr);

myArr.shift(); // removes first element of array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3); // like substring, (doesn't includes last index element)
console.log(myn1);
console.log("B", myArr); // sliced elements remains in original array

console.log("A ", myArr);
const myn2 = myArr.splice(1,3); // includes last index element
console.log(myn2);
console.log("B", myArr); // spliced elements are deleted from original array

const marvel_heros = ["spiderman", "IronMan", "Thor"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros); // array as single element
// console.log(marvel_heros); // array inside array
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros); // no modification in original array
console.log(allHeros);

// Spread Operator
const all_new_Heros = [...marvel_heros, ...dc_heros]; //adds every element individually
console.log(all_new_Heros);

const another_array = [1,2,3, [4,5,6],7,[6], [6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Amitesh")); // gives boolean value
console.log(Array.from("Amitesh"));
console.log(Array.from({name:"amitesh"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));