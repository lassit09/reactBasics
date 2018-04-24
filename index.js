// let greeting = 'Hello world';
// console.log(greeting);

// var name = "Taylor";
// console.log(name);
// name = "Kayla";
// console.log(name);
// prints Taylor and then reassigns the variable and prints Kayla

// function printName() {
//     var name = "Kayla";
//     console.log(name);
// }
// printName();
// prints Kayla

// var name = "Taylor";
// if (name == "Taylor") {
//     let fullName = "Taylor Lassiter";
//     const age = 26;
// }
// console.log(age);
// gives an error because const is block-scoped

const integers = [1,2,3]; //map to make [2,3,4]

// const updatedIntegers = integers.map(function(number) {
//     return number += 1
// });

//normal arrow function
// const updatedIntegers = integers.map((number) => {
//     return number += 1
// });

//implicit return arrow function
// const udatedIntegers = integers.map(number => number += 1);

// console.log(updatedIntegers);

const ages = [22, 43, 6, 17, 35];

const adults = ages.filter(age => age > 20);

console.log(adults);
