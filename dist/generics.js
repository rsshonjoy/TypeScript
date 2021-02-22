"use strict";
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user2 = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
});
