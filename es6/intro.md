ECMAScript6 (ES6)
-------
* We can use Babel to convert ES6 code to ES5 and vice versa.
* var is function-scoped
* let is block-scoped
    * let won't let you use the same variable name
    * let can be updated
    * should use let more than const
* const is block-scoped
    * const cannot be reassigned
    * if const is an object, it is mutable
        * can't change the value of the object but can change it's properties

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

//template strings
// const name = "Bill";
// const age = 35;

// const sentence = `My name is ${name}, and I am ${age} years old.`;
// console.log(sentence); 

// funciton constructor
// create a new object with name = Bill and age = 35
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.speak = function() {
//     console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
// };

// const bill = new Person("Bill", 35);
// bill.speak();

// classes
class Person {
    constructor(name, age, children) {
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak() {
        console.log(`Hi my name is ${this.name}.`)
    }
    birth(child) {
        this.children.push(child);
        return this.children;
    }
}

const bill = new Person ("Bill", 50, ["Sean", "Sarah"]);
bill.speak();
bill.birth("Jess");
console.log(bill.children);

// spread operators
const names = ["John", "Bill", "Sam"];
const moreNames = ["William", "Paul", "Mike"];
console.log(...names);

// ["John", "Bill", "Sam", "Gio", "William", "Paul", "Mike"]
const allNames = [...names, "Gio", ...moreNames];
console.log(allNames);
