const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// adicionando dias no calendário de forma dinâmica
  const addDays = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.querySelector('#days');
    for (i = 0; i < decemberDaysList.length; i++){
        let dia = decemberDaysList[i];
        let criaDia = document.createElement('li');
        criaDia.innerHTML = dia;

        days.appendChild(criaDia);

        if (dia === 24 || dia === 31) {
            criaDia.className = 'day holiday';
            days.appendChild(criaDia)
        } else if (dia === 4 || dia === 11 || dia === 18) {
            criaDia.className = 'day friday'
            days.appendChild(criaDia)
        } else if (dia === 25) {
            criaDia.className = 'day holiday friday'
            days.appendChild(criaDia)
        } else {
            criaDia.className = 'day'
            days.appendChild(criaDia)
        }
    }
}

  addDays()

// adicionando botão dinamicamente
let criaBotao = (string) => {
    const containerDeBotoes = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.innerHTML = string;
    botao.id = 'btn-holiday'
    containerDeBotoes.appendChild(botao)
}

criaBotao('Feriados')

// botão que mostra os feriados

let mostraFeriado = () => {
  let feriados = document.querySelectorAll('.holiday');
  let botaoFeriados = document.querySelector('#btn-holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  botaoFeriados.addEventListener('click', () => {
    for(i = 0; i < feriados.length; i++) {
      if (feriados[i].style.backgroundColor === setNewColor){
        feriados[i].style.backgroundColor = backgroundColor
      } else {
        feriados[i].style.backgroundColor = setNewColor
      }
    }
  })
}

mostraFeriado();
