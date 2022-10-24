const produto = 1;
const valor = 3;

if (produto >= 0 && valor >= 0) {
  const custoTotal = produto * 1.2;
  const lucroTotal = (valor - custoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos");
};
