var array = [
  { id: 1, name: "Ana", age: 20 },
  { id: 2, name: "Bogdan", age: 25 },
];

var numberArray = [3, 5, 8, 9, 2, 4, 1, 0, 8];

var someBoolean = array.some((item) => item.name === "Ana");
var someBooleanWithoutArrowFunctions = array.some(function (item) {
  return item.name === "Ana";
});

var everyBoolean = array.every((item) => item.name === "Ana");

//array.forEach((item) => (item.name = "Alex"));
array.forEach((item, index, self) => console.log(self));

var sortedArray = array.sort((a, b) => (b.age > a.age ? 1 : -1));
var sortedNumberArray = numberArray.sort((a, b) => a - b);

console.log(someBoolean);
console.log(someBooleanWithoutArrowFunctions);
console.log(everyBoolean);
//console.log(array);
console.log(sortedArray);
console.log(sortedNumberArray);
