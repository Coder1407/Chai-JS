function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
// addTwoNumbers(3,4);
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
// addTwoNumbers(3,null);
// const result = addTwoNumbers(3,5);
// console.log("Result: ", result); // undefined

function addTwoNumbers2(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log("Amitesh"); // never printed
}
const result = addTwoNumbers2(3,5);
// console.log("Result: ", result);

function loginUserMessage(username = "Sam") { // default value is Sam
    if(username == undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Amitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) { // rest operator
    return num1;
}
// console.log(calculateCartPrice(200,400,500,2000));

//Using Objects inside functions
const user = {
    username: "Amitesh",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "Sam",
    price: 399
})

//Using arrays inside functions
const myNewArray = [200,300,100,400];
function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,100,400]));