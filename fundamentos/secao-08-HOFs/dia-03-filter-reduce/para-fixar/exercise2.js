// faça uma função que some todos os números pares do array numbers
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;
const sum = (acc, num) => acc + num;

const sumAllEven = (array) => array.filter(isEven).reduce(sum);

console.log(sumAllEven(numbers));