// Step 1
const friend: {name: string, age: number} = {
    name: 'Samuel David',
    age: 17
}

friend.name = 'David'
friend.age = 18;

console.log(friend);


// Step 2
let player: {
    club: string,
    salary: number
} = {
    club: 'Barcelona',
    salary: 45000000
}

console.log(player);


// Step 3
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
    salary: 45181937,
    wife: 'Antonella Roccuzzo',
    isPlaying: true
}

console.log(messi);


const ronaldo: Player = {
    name: 'Cristiano Ronaldo',
    club: 'Barcelona',
    salary: 43000000,
    isPlaying: true
}

console.log(ronaldo);


function getBonus(player: Player, friends: string[]) {
    return player.salary * 0.1;
}

const messiBonus = getBonus(messi, ['Sam', 'Tam'])

console.log(messiBonus);
