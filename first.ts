let myMoney = 50;
myMoney = 150;
myMoney = 0;

let club: string = "Barcelona"
const isFamous = false;
const isHated: boolean = false;

function add(num1: number, num2: number) {
    return num1 + num2;
}

add(3,6)

function fullName(firstName:string, lastName:string):string {
    return firstName + " " + lastName;
}

const user = fullName('Martin', 'Rock')


function doubleItAndConsole(num:number): void {
    const result = num * 2;
    console.log(result);
}

const output = doubleItAndConsole(10);
console.log("output: ", output);

let multiply2: (x: number, Y: number) => number;

multiply2 = (x, y) => x * y;

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(25, 6));


const numbers: number[] = [1, 3, 5, 7];
numbers.push(9);

const friends: string[] = ['George', 'Bill', 'Jeff']
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name ', megaName);



// Object
const friend: {name: string, age: number} = {
    name: 'Samuel David',
    age: 17
}

friend.name = 'David'
friend.age = 18;


let player: {
    club: string,
    salary: number
} = {
    club: 'Barcelona',
    salary: 45000000
}


interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messi: Player = {
    name: 'Lionel Andrés Messi',
    club: 'Barcelona',
    salary: 45000000,
    wife: 'Antonella Roccuzzo',
    isPlaying: true
}

const ronaldo: Player = {
    name: 'Cristiano Ronaldo',
    club: 'Barcelona',
    salary: 43000000,
    isPlaying: true
}

function getBonus(player: Player, friends: string[]) {
    return player.salary * 0.1;
}

getBonus(messi, ['Sam', 'Tam'])


// class
class Person {
    name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(name: string, father: string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName(): string{
        return this.name;
    }
}

const sam = new Person('Samual', 'David')
console.log('name', sam.name);
const samName: string = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Carson'
// rs shonjoy