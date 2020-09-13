let saga = function () {
  var made = function (input) { console.log(input) }
  return made;
}

let saga2 = saga();
let saga3 = saga();


console.log(saga3 === saga2)


let arr = function () {
  let arr = [];
  return arr
}

let arr2 = arr();
let arr3 = arr();


console.log(arr2 === arr3)


var makeAFunction = function () {
  var made = function (input) {
    console.log(input);
  };
  return made;
};
var firstMadeFunction = makeAFunction();
var secondMadeFunction = makeAFunction();
console.log(
  "do the functions threequal?",
  firstMadeFunction === secondMadeFunction
);
var makeAnArray = function () {
  var made = [];
  return made;
};
var firstMadeArray = makeAnArray();
var secondMadeArray = makeAnArray();
console.log("do the arrays threequal?", firstMadeArray === secondMadeArray);