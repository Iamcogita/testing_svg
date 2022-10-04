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



console.log("-".repeat(30));
// 4 shorten a string with ellipsis
console.log("\n4: shorten string with (...) \n");
const str = "The quick brown fow jumped over the lazy dog.";
function a (str) {
    let newStr = str.slice(0 , 10).concat("...");
    return newStr;
}
console.log(a(str));

console.log("-".repeat(30));
// 5 convert camelCase to snake_case and vice-verse
console.log("\n5: convert strings from camelCase to snake_case, and vice-versa \n");


console.log("-".repeat(30));
// 6 slugify a string
console.log("\n6: slugify a string \n");


console.log("-".repeat(30));
// 7 hangman
console.log("\n7: hangman game \n");
