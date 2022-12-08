// Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce
const numbers = [50, 85, -30, 3, 15];

const higherValue = numbers.reduce((bigger, number) => bigger > number ? bigger : number);
console.log(higherValue);