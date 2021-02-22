//Square generator//

function* squareGenerator(number) {
  while (true) {
    yield number * number;
    number = number * number;
  }
}

const generator = squareGenerator(2);
console.log(generator.next());
console.log(generator.next());
generator.return();
//console.log(generator.next());

//Square generator//

//Fibonacci generator //
function* fibonacciGenerator(number) {
  if (number < 2) return 1;
  yield fibonacciGenerator(number - 1).next().value +
    fibonacciGenerator(number - 2).next().value;
}

function* fiboncciSeries() {
  let number = 0;
  while (true) {
    const result = fibonacciGenerator(number).next().value;
    yield result;
    number++;
  }
}

function callFibonacciSeries(limit) {
  for (let i = 0; i < limit; i++) {
    console.log(fibonacci.next().value);
  }
}
const fibonacci = fiboncciSeries();

callFibonacciSeries(10);
//Fibonacci generator //
