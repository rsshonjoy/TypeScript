// Step 1
let fruits1 = ['apple', 'banana', 'orange'];

fruits1.push('pineapple');
console.log('Step 1', fruits1);


// Step 2 --- error
let fruits2 = ['apple', 'banana', 'orange'];

fruits2.push(37);
console.log('Step 2', fruits2);


// Step 3
let fruits3 = [];

fruits3.push(18);
fruits3.push(19);
fruits3.push('apple');

console.log("Step 3", fruits3);


// Step 4
let mixed = ['apple', 7, true];

mixed.push('banana', 37, false);
console.log('Step 4', mixed);


// Step 5
let mixed1 = ['mango', 7, false, {}];

mixed1.push('orange', 37, true, {
    name: "Shonjoy"
});
console.log('Step 5', mixed1);
