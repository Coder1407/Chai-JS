const tinderUser = new Object(); // constructor (singleton)

tinderUser.id = "123abc";
tinderUser.name= "Sam";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amitesh",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2};
console.log(obj3);

// Array containing multiple objects
const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));