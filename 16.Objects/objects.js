// singleton
// Object.create();

// Object Literals
const mySym = Symbol("key1"); // creating Symbol

const JsUser = {
    name: "Amitesh", // keys and values
    "full name" : "Amitesh Sharma",
    [mySym]: "mykey1", // saved as symbol
    age: 20,
    location: "Dehradun", // keys are saved a String by default
    email: "amitesh@hotmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"] 
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "amitesh@chatgpt.com" //overwritting values
// Object.freeze(JsUser); // locks values
JsUser.email = "amitesh@outlook.com";
console.log(JsUser.email); // doesn't change

JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());