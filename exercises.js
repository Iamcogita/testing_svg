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
for (let i = 1; i < 20; i++) {
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
const str = "The quick brown fow jumped over the lazy dog.";
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


console.log("-".repeat(30));
// 7 hangman
console.log("\n7: hangman game \n");
