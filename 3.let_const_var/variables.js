const accountId = 1407; // cannot be changed
let accountEmail = "amitesh@gmail.com" ; // best way- works appropriate for block scope
var accountPassword = "1234"; //changes in every block scope
accountCity = "Dehradun"; // not at all good way
let accountState; // no value => undefined
// accountId = 2;

accountEmail = "hchc@gmail.com";
accountPassword = "2121";
accountCity = "Mumbai";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/