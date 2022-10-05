function sum(...args) {
  const sumAll = args.reduce((acc, arg) => acc + arg, 0);
  return sumAll;
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));
