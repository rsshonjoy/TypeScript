"use strict";
// Step 1
const friend = {
    name: 'Samuel David',
    age: 17
};
friend.name = 'David';
friend.age = 18;
console.log(friend);
// Step 2
let player = {
    club: 'Barcelona',
    salary: 45000000
};
console.log(player);
const messi = {
    name: 'Lionel Andrés Messi',
    club: 'Barcelona',
    salary: 45181937,
    wife: 'Antonella Roccuzzo',
    isPlaying: true
};
console.log(messi);
const ronaldo = {
    name: 'Cristiano Ronaldo',
    club: 'Barcelona',
    salary: 43000000,
    isPlaying: true
};
console.log(ronaldo);
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const messiBonus = getBonus(messi, ['Sam', 'Tam']);
console.log(messiBonus);
