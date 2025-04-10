// Declaring variables in JS
var name = "Muzaffar";
console.log(name); // Show the value in console

// String concatenation -> Combining two string with '+'
console.log("My name is "+name);

// ES6 (New JS) - String interpolation
console.log(`My name is ${name}, I'm using String interpolation here`)

// Data types

// String - Characters, words and sentence
var message = `My name is ${name}`
console.log(message);

//Numbers
var a = 10;
var b = 3;

var sum = a+b;
console.log(sum);

var minus = a - b;
console.log(minus);

var product = a * b;
console.log(product);

var division = a /b;
console.log(division);

var modulo = a % b;
console.log(modulo); // remainder of division operation (10/3 = 3 with 1 as remainder)

var powerOf = a ** b;
console.log(powerOf);

// boolean

var hungry = true;
var tired = false;

console.log(hungry && tired); // AND - Both needs to be true for it to be true
console.log(hungry || tired); // OR - One of it needs to be true for it to be true
console.log(!hungry); // Reverse // The reverse of

// if else -- To verify condition

var age = 10;
var withParent = true;

if (age < 13) {
  console.log("You cannot watch the movie");
}
else {
  console.log("You can watch the movie");
}


if (age < 13){
  console.log("You cannot watch the movie");
  
} else if (age < 18){
  console.log("You can watch the movie with parent");
  
}
else {
  console.log("You can watch the movie");
}

// Boolean operation
// Age is smaller than 13, OR ( age is < 18 &&  withParent == false) 
if ( (age < 13) || (age < 18 && !withParent)) {
  console.log("You cannot watch the movie");
}
else {
  console.log("You can watch the movie");
}

// Array
var scores = [30,60,80,100,20,70];

console.log(scores[0]); //The first item of the array
console.log(scores[2]); // The third item of the array
scores.push(80); // Add 80 at the end of the array
console.log(scores);
scores.pop(); //Remove an item from the end of the aray
scores.pop();  //Remove an item from the end of the array
console.log(scores);
console.log(scores.length); // How many items are there
scores.splice(2,1); // Removing from index 2, 1 item -> removing 80 from the array
console.log(scores);

// Object -> Key, value mapping

// Imagine it as a row in table
// key -> left part
// value -> the right part

var info = {"name":"Muzaffar", "location":"Bangi", "profession":"Trainer","age":30,"rate":1000};

// . notation
console.log(info.name);

// [""]
console.log(info["location"]);

// We can also perform operation in ${}
console.log(`My name is ${info.name.toUpperCase()}, I am ${info.age + 9} years old and 
I am a ${info.profession} based in ${info.location.toUpperCase()}. 
My rate is MYR ${info.rate.toFixed(2)}`)

