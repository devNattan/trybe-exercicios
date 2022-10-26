// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

const detran = (speed) => (
    speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você esta na velocidade permitida`
);

console.log(detran(150))