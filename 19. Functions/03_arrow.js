// this refers to current context
const user = {
    username: "Amitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); // global object in browser => Window Object

// function chai() {
//     let username = "Amitesh";
//     console.log(this.username);
// }
// chai();

// const chai = function() {
//     let username = "Amitesh";
//     console.log(this.username);
// }
// chai();

// Arrow function
const chai = () => {
    let username = "Amitesh";
    console.log(this.username);
}
chai();

// Explicit return
const addTwo = (num1, num2) => {
    return num1+num2;
}
console.log(addTwo(3,4));

// Implicit return
const add2 = (num1, num2) => num1+num2;
console.log(add2(5,8));

const addTo = (num1, num2) => (num1+num2);
console.log(addTo(5,4));

const uname = (num1, num2) => ({username: "Amitesh"});
console.log(uname(1,4));

const myArray = [2,5,3,7,8];
myArray.forEach(() => {});