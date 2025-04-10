// Declarative programming

const numbers = [1,2,3,4,5];

// Map
// Ex in imperative programming

let answers = [];
// Describing how to do it -> for loop, then * 2 then push
for (let i = 0; i< numbers.length; i++){
  answers.push(numbers[i]*2);
}
console.log('imperative:',answers);

// map -> Foreach item in the array do ...
const answerDecl = numbers.map(val=> val*2);
console.log('declarative:',answerDecl)


// Filter

let answers2 = [];

for (let i = 0; i < numbers.length;i++){
  
  // strict equality === [ data type and value] // "2" === 2 [false]
  // equality == [ value] // "2" == 2 [true]
  
  if (numbers[i] % 2 === 0){
    answers2.push(numbers[i]);
  }
}
console.log("Impl:",answers2);

// For each val in the array, verify that fhe following condition is fulfiled : val %2 === 0
const answer2Decl = numbers.filter(val=> val %2 === 0);
console.log("Decl: ", answer2Decl)

// Declarative programming

const numbers = [1,2,3,4,5];
// Ex in imperative programming

let answers3 = 0;

for (let i = 0; i < numbers.length; i++){
  answers3 += numbers[i];
}

console.log("imperative: ",answers3);

// foreach val in the array, add it to acc
// acc = 0 (by default)
// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5
// You may override acc, eg : const answers3decl = numbers.reduce((acc,val)=> acc+val,20);
const answers3decl = numbers.reduce((acc,val)=> acc+val);
console.log("declarative:",answers3decl)
