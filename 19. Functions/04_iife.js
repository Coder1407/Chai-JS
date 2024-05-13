// Immediately Invoked Function Expressions (IIFE)
// there is problem caused due to global scope pollution. to remove this pollution we use iife

// named iife // => where functions have names
(function chai() {
    console.log("DB CONNECTED");
}) ();
// (function definition) (function call)
// chai();

// simple iife
((name) => {
    console.log(`DB CONNECT TO ${name}`);
}) ('Amitesh');