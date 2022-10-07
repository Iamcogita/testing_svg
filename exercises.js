// 1 Looping a triangle
console.log("\n1 : making a triangle with a for loop \n");
let triangle = "#";
for(let i = 0 ; i < 6 ; i++){
    console.log(triangle);
    triangle = triangle + "#";
}
console.log("-".repeat(30));
// 2 FizzBuzz
console.log("\n2: fizzbuzz\n");
for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
console.log("-".repeat(30));
// 3 Chessboard
console.log("\n3: chessboard\n");

let chessboard = "";
for(let i = 0 ; i < 8 ; i++ ){
    for(let j = 0 ; j < 8 ; j ++){
        if ((i + j) % 2 === 0){ chessboard = chessboard.concat(" "); }
        else{ chessboard = chessboard.concat("#"); }
    }
    chessboard = chessboard.concat("\n");
}
console.log(chessboard);

console.log("-".repeat(30));
// 4 shorten a string with ellipsis
console.log("\n4: shorten string with (...) \n");

const str = "The quick brown fox jumped over the lazy dog.";
function fun(str , val) {
    let newStr = str.slice(0 , val).concat("...");
    return newStr;
}
console.log(fun(str , 10 ));

console.log("-".repeat(30));
// 5 convert camelCase to snake_case and vice-verse
console.log("\n5: convert strings from camelCase to snake_case, and vice-versa \n");

const snake = "this_string_is_snake_case";
const camel = "thisStringIsCamelCase";

function snakeToCamel(x){
    return x.replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}

function camelToSnake(x){
    return x.replace(/[A-Z]/g, char => `_${char.toLowerCase()}`);
}

console.log("result: " + snakeToCamel(snake));
console.log("result: " + camelToSnake(camel));

console.log("-".repeat(30));
// 6 slugify a string
console.log("\n6: slugify a string \n");

let slugString = "% /a String! $to ?sluggify#";

function sluggify(str){
    return str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

console.log(sluggify(slugString));

console.log("-".repeat(30));
// 7 Given an URL, parse the query string such that it returns an object
console.log("\n7: parse a query string and return an object \n");
let linkToParse = "mindera.com?a=1,2&b=3,4&c=four";

function objectify(url) {
    const [, queryString ] = url.split("?");
    const queryParameters = queryString.split("&");
    return queryParameters.reduce((queryStringObject, queryParameter) => {
        const [name, value] = queryParameter.split("=");
        if (value.includes(",")) {
            const numbers = value.split(",")
                  .map((number) => Number(number));
                  queryStringObject[name] = numbers;
        } else { queryStringObject[name] = value; }
        return queryStringObject;
    }, {});
}

console.log(objectify(linkToParse));

console.log("-".repeat(30));

// 8 reverse an array without ".reverse()"
console.log("\n8: reverse an array \n");

let arrayToReverse = [ 1 , 2 , 3 , 4 , 5 , 6 ];
let arrayToReverse2 = [ "a" , "b" , "c" , "d" , "e" , "f"];

function reverseArray(arr){
    let newArr = [];
    arr.forEach(e => {newArr.unshift(e)})
    return newArr;
}
function reverseArrayInPlace(arr){
    for(let i = 0 ; i< Math.floor(arr.length/2); i++){
        [arr[i] , arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i] , arr[i]] ;
    }
    return arr;
}

console.log(reverseArray(arrayToReverse));
console.log(reverseArrayInPlace(arrayToReverse2));

console.log("-".repeat(30));

// 9 the sum of a range
console.log("\n9: the sum of a range \n");

function createArr(min, max){
    if(min >= max){return console.log("bad move.")}
    let newArr = [];
    for(let i = min ; i <= max ; i++){
        newArr.push(i); }
    return newArr;
}

function sumElements(arr){
    let result = 0;
    for(let i = 0 ; i < arr.length ; i++){
        result = result + arr[i];}
    return result;
}

console.log(sumElements(createArr(1,10)));

console.log("-".repeat(30));

// 10 create arrayToList that builds up a list
console.log("\n10: write a function arrayToList that builds up a list  \n");

const thisArray = [1 , 2 , 3 , 4 , 5 , 6];

function arrayToList([...arr], n = 0){
    return (n < arr.length) ? {value: arr[n], rest: arrayToList(arr, n + 1)} : null;
}

function listToArray({...list}, arr = []){
    arr.push(list.value);
    return (list.rest != null) ? listToArray(list.rest, arr) : arr;
}

console.log(arrayToList(thisArray));
console.log(listToArray(arrayToList(thisArray)));

console.log("-".repeat(30));

// 11 create a function that takes two values and compares if equal
console.log("\n11: create a function that takes two values and compares if equal  \n");

let obj = {here: {is: "an"}, object: 2};
let counter = 0;

function deepEqual (value1 , value2){
    console.log("recursion times:" + counter++);
    if (value1 === value2) {return true;}
    if (value1 == null || typeof value1 != "object" || value2 == null || typeof value2 != "object"){return false;}
    let keysIn1 = Object.keys(value1);
    let keysIn2 = Object.keys(value2);
    if (keysIn1.length !== keysIn2.length) {return false};
    for (const key of keysIn1){
        if (!keysIn2.includes(key) || !deepEqual(value1[key], value2[key]))
        {return false;}
    }
    return true;
}

console.log(deepEqual(obj , {here: {is: "an"}, object: 2} ));

console.log("-".repeat(30));

// 12 implement Quicksort algorithm
console.log("\n12: implement Quicksort algorithm \n");

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0];
    const right = [];
    const left = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5,3,1,8,9]));

console.log("-".repeat(30));

// 13 implement Binary Search algorithm
console.log("\n13: implement Binary Search algorithm \n");

function binarySearch(arr, elem) {
    if (arr.length === 0) {
        return -1;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const middleValue = arr[middleIndex];
    if (elem === middleValue) {
        return elem;
    }

    if (elem > middleValue) {
        return binarySearch(arr.slice(middleIndex+1), elem);
    }
    return binarySearch(arr.slice(0, middleIndex), elem);
}

console.log(binarySearch(quickSort([1,4,5,2]), 2));

console.log("-".repeat(30));

// 14 Write a function arrayToBinaryTree that takes an array and returns a binary tree
//Also write a function add, that adds a node to the said binary tree
console.log("\n14: create arrayToBinaryTree that takes an array and returns a binary tree");
console.log("also write a function add, that adds a node to the said binary tree \n");

function add(tree, value) {
    if (tree === null) {
        return {
            value,
            left: null,
            right: null,
        };
    }
    if (value < tree.value) {
        return {
            value: tree.value,
            left: add(tree.left, value),
            right: tree.right,
        }
    }
    return {
        value: tree.value,
        left: tree.left,
        right: add(tree.right, value),
    }
}
function arrayToTree(array) {
    let tree = null;
    for (const elem of array) {
        tree = add(tree, elem);
    }
    return tree;
}

console.log(arrayToTree([ 1 , 2 , 3 , "A" , "B" ]));

console.log("-".repeat(30));