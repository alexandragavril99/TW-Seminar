function logToConsole(item) {
  console.log(item);
}

function square(number) {
  logToConsole(number * number);
  //console.log(Math.pow(number,2));
}

// ---------- //

var myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

var colors = [
  { id: 0, name: "red" },
  { id: 1, name: "blue" },
  { id: 2, name: "green" },
];

function changeColor(colors) {
  colors[0].name = "white";
}

function compareColor() {
  debugger;
  logToConsole("First array: ");
  logToConsole(colors);

  //var jsonString = JSON.stringify(colors);
  //var newColors = JSON.parse(jsonString);
  var newColors = JSON.parse(JSON.stringify(colors));

  changeColor(newColors);

  logToConsole("Second array: ");
  logToConsole(newColors);
}

function changeCar(car) {
  car.make = "Toyota";
}

function compareCars() {
  logToConsole(myCar);
  changeCar(myCar);
  logToConsole(myCar);
}

// ----------- //
var numbers = [1, 2, 3, 4, 5];

const cube = function (number) {
  return number * number * number;
};

function mapCube(array, cube) {
  let result = [];
  for (index in array) {
    result[index] = cube(array[index]);
  }

  logToConsole(result);
}

function callMapCube() {
  return mapCube(numbers, cube);
}

function callMapCube2() {
  return mapCube(numbers, function (number) {
    return number * number * number; // sau (number)=>number*number*number
  });
}

// ------------//

function consoleLoop(x) {
  logToConsole(x);
  if (x >= 10) {
    return;
  }
  consoleLoop(x + 1);
}

function factorial(number) {
  if (number < 2) {
    return 1;
  }
  return number * factorial(number - 1);
}

// ---------- //

function addSquares(a, b) {
  function square(number) {
    return number * number;
  }

  return square(a) + square(b);
}

function outsideFunc(x) {
  function insideFunc(y) {
    return x + y;
  }

  return insideFunc;
}

function calc() {
  return outsideFunc(4)(5);
  //   var inside = outsideFunc(4);
  //   return inside(5);
}

// ---------- //

var array = [
  { id: 0, name: "Ana", age: 20 },
  { id: 1, name: "Maria", age: 23 },
  { id: 2, name: "Ionut", age: 25 },
];
var numbersArray = [1, 2, 3, 4, 5, 6];

var newArray = array.map((item) => item.name);
var filteredArray = array.filter((item) => item.name === "Ana");
var foundObject = array.find((item) => item.name === "Ana");

const reduceFunction = function (a, b) {
  return a + b;
};

function calculateSum(array, reduceFunction) {
  return array.reduce(reduceFunction);
}

var obj = { age: 20, name: "Marcel" };

class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

class Student extends Person {
  constructor(age, name, faculty) {
    super(age, name);
    this.faculty = faculty;
  }
  toString() {
    // return this.age + " " + this.name + " " + this.faculty;
    return `${this.age} ${this.name} ${this.faculty}`;
  }

  setFaculty(newFaculty) {
    this.faculty = newFaculty;
  }

  getFaculty() {
    return this.faculty;
  }
}

var person = new Person(21, "Ana");
var student = new Student(20, "Maria", "ASE");

function logClass() {
  logToConsole(obj);
  logToConsole(person);
  //logToConsole(student);
  logToConsole(student.toString());

  logToConsole(student.getFaculty());
  student.setFaculty("Poli");
  logToConsole(student.toString());
}

// ----TEMA---- //


const reduceFunction2 = function (a, b) {
  return a * b;
};

function factorial(number) {
  let numbersFact = [];
  for (let i = 1; i <= number; i++) numbersFact[i] = i;

  return numbersFact.reduce(reduceFunction2);
}


