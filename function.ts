/** ----- Step 1 ----- */

// const myFunction = () => {
//   console.log("Hello");
// }
// myFunction()


/** ----- Step 2 ----- */

// let myFunction : Function;

// myFunction = () => {
//   console.log("Hello");
// }

// myFunction()

/** ----- Parameterize Function ----- */

// const myFunction = (a: string, b: string) => {
//   console.log(`Hello ${a} ${b}`);
// }

// myFunction("RS", "Shonjoy")


/** ----- Optional Parameterize Function ----- */

// const myFunction = (a: string, b: string, c?: string) => {
//   console.log(`Hello ${a} ${b}`);
// }

// myFunction("RS", "Shonjoy")


/** ----- Default Parameterize Function ----- */

// const myFunction = (a: string, b: string, c: string = "Anyone") => {
//   console.log(`Hello ${a} ${b}`);
//   console.log(c);
  
// }

// myFunction("RS", "Shonjoy")


/** ----- Function Signature ----- */

// Step 1

// let add1: (x: number, y: number) => number;

// add1 = (a: number, b: number) => {
//   return a + b;
// }
// console.log(add1(3, 4));


// Step 2

let calculator: (x: number, y: number, z: string) => number;

calculator = (a: number, b: number, c:string) => {
  if (c === "add") {
    return a + b;
  }else {
    return a - b;
  }
};

console.log(calculator(4, 5, "minus"));
