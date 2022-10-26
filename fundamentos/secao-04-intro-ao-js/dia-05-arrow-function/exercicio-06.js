let status = 'desligado';

const ligarDesligar = (status) => (
  status === 'desligado' ? status = 'ligado' : status = 'desligado'
)

console.log(ligarDesligar());
console.log(ligarDesligar());
console.log(ligarDesligar());