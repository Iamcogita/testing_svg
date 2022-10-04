const foo = true;
const bar = false;

console.log(typeof foo);
console.log(typeof bar);

const str = "plain old string";
console.log(typeof str);

const num = 3;
console.log(typeof num);

console.log(typeof Number);

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

// --

function anyFunction(num){
    let a = 5;
    if(num > 6 ){
        a++;
    }
    return a;
}
console.log(anyFunction(7));

// --

var thisVar = "this";
var anotherVar = "not this";
console.log(thisVar === anotherVar ? "this string" : "another string");

// --

const arr = [3,"str",true, anyFunction];
const regexp = /[a-z]/;

const newObj = {v: 666};
const thisString = `The value of newObj: ${newObj.v}`;
console.log(thisString);