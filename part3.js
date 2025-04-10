// Declarative programming

const numbers = [1,2,3,4,5];
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
