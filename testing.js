const foo = true;
const bar = false;

console.log(typeof foo);
console.log(typeof bar);

const num = 3;
console.log(typeof num);

const str = "plain old string";
console.log(typeof str);

let x;
console.log(typeof x);

x = num;
console.log(typeof x);

let y = null;
console.log(typeof y);

console.log(typeof NaN);

console.log([1, 2, 3].map((f) => f * 2));

console.log(typeof parseInt("10"));

console.log(["10"].map(Number));

console.log(1 == "1");

console.log(1 === "1");

console.log(parseFloat("3.4"));

const obj = {
    a : 1,
    b : 2,
    c : 3,
};
console.log(typeof obj);

console.log(typeof Number);