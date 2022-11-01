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

  // for (i = 0; i < decemberDaysList.length; i++) {
    //     let dia = decemberDaysList[i];
    //     let criaDiaLi = document.createElement('li')
    //     criaDiaLi.innerHTML = dia;

    //     days.appendChild(criaDiaLi)
    // }
