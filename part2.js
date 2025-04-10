let name = "Muzaffar"; // To declare a variable that value can be changed
const PI = 3.142 // To declare a constant where value cannot be changed

// "let" resolve 2 previous issues that happened var

// Demonstrating block and variable scope with let

let x = 10;

if (true) {
  let x = 20;
  console.log(x); // 'let' creates a new variable scoped only within this block
}
console.log(x); // Outside the block, the original 'x' remains unchanged

// Example using var

var a = 10;

if (true) {
  var a = 20;
  console.log(a); // 'var' does not have block scope, so this modifies the outer 'a'
}
console.log(a); // The value of 'a' is changed globally, which can lead to unexpected results


// With var, 'y' is hoisted — it's recognized at the top but not yet assigned a value
// It's as if 'var y;' was declared before the first console.log
console.log(y); // Outputs: undefined
var y = 5;
console.log(y); // Outputs: 5

// With let, accessing 'z' before it's initialized throws a ReferenceError
console.log(z); // Error: Cannot access 'z' before initialization
let z = 10;
console.log(z);


