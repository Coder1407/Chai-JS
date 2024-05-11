let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023,0,23,5,3);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());

console.log(Math.floor(Date.now()/1000)); //gives time elapsed in seconds instead of miliseconds

let newDate = new Date();
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long"
})