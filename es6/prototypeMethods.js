// const person = {
//     name: "Bill",
//     age: 50
// }

// funciton constructor
// create a new object with name = Bill and age = 35
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

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