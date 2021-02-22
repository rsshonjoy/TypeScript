"use strict";
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
const myFunction = (a, b, c = "Anyone") => {
    console.log(`Hello ${a} ${b}`);
    console.log(c);
};
myFunction("RS", "Shonjoy");
