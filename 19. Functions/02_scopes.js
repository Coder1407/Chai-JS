// Global Scope
var c = 300;
let a =100;

if(true) {
    // Block Scope
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER: ",a);
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // c is defined

function one() {
    const username = "Amitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    // two();
}
one();

if(true) {
    const username = "Amitesh";
    if(username == "Amitesh") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++ interesting+++++++++++++
console.log(addone(5));
function addone(num) {
    return num+1;
}

// addTwo(5); // Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num+2;
}
console.log(addTwo(5)); 