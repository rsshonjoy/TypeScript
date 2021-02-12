"use strict";
let myMoney = 50;
myMoney = 150;
myMoney = 0;
let club = "Barcelona";
const isFamous = false;
const isHated = false;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 6);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Martin', 'Rock');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log("output: ", output);
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
const numbers = [1, 3, 5, 7];
numbers.push(9);
const friends = ['George', 'Bill', 'Jeff'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name ', megaName);
// class
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samual', 'David');
console.log('name', sam.name);
const samName = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Carson'
// rs shonjoy
