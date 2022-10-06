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




console.log("-".repeat(30));
// 8 hangman
console.log("\n8: hangman game \n");


console.log("-".repeat(30));