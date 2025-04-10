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


// Arrow notation function

function add(a, b) {
  return a + b;
}

console.log(add(10, 3));

// Arrow function version
// For single-line functions, 'return' and curly braces can be omitted
// The 'function' keyword is replaced with =>
const sum = (a, b) => a + b;
console.log(sum(3, 3));

// Exercise : 
const sumOfSquares = (a,b) => a**2 + b**2;
console.log(sumOfSquares(3,4));


// Array destructuring example

const numbers = [1,2,3];

// Destructure the array into individual variables
// 'first' gets 1, 'second' gets 2, and 'third' gets 3
const [first,second,third] = numbers;
 
console.log(first); // Output:1
console.log(second);// Output:2
console.log(third); // Output:3

// Object destructuring
const info  = {"name":"Muzaffar","profession":"trainer","age":30};

// Destructure the object into individual variables
// 'name' gets "Muzaffar", 'profession' gets "Trainer", and 'age' gets '30'
const {name, profession, age} = info;

console.log(name); // Output:Muzaffar
console.log(profession); // Output:Trainer
console.log(age); // Output:30



