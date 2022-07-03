function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  function createDaysOfTheMonth() {
    let dates = [
      29, 30, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31
      ];
    let dateList = document.querySelector('#days')


    for (let index = 0; index < dates.length; index += 1) {
      const date = dates[index];
      const dateListItem = document.createElement('li');
      dateListItem.innerHTML = date;
      dateListItem.classList.add('day')
      if(date == 24 || date == 25 || date == 31) {
        dateListItem.classList.add('holiday')
      }
      if (date == 4 || date == 11 || date == 18 || date == 25) {
        dateListItem.classList.add('friday')
      }
      dateList.appendChild(dateListItem);
    };
  };

  createDaysOfTheMonth();

  function createHolidayButton(str) {
    if (str != 'Feriados') {
      return
    }
    let button = document.createElement('button')
    button.innerText = str
    button.setAttribute('id', 'btn-holiday')
    let buttonsConteinerElement = document.querySelector('.buttons-container')
    buttonsConteinerElement.appendChild(button)
    button.addEventListener('click', changeColorOfHolidays)
  }

  createHolidayButton('Feriados')

  function changeColorOfHolidays() {
    let holidays = document.querySelectorAll('.holiday')
    for (i = 0; i < holidays.length; i++) {
      if (holidays[i].style.backgroundColor != 'lightblue') {
        holidays[i].style.backgroundColor = 'lightblue'
      } else {holidays[i].style.backgroundColor = 'rgb(238,238,238)'
      }
    }
  }

  function createFridayButton(str) {
    if (str != 'Sexta-feira') {
      return
    }
    let button = document.createElement('button')
    button.innerText = str
    button.setAttribute('id', 'btn-friday')
    let buttonsConteinerElement = document.querySelector('.buttons-container')
    buttonsConteinerElement.appendChild(button)
  }
  createFridayButton('Sexta-feira')


function changeTextOfFridays(fridayArrays) {
  let fridaybutton = document.querySelector('#btn-friday')
  let friday = document.querySelectorAll('.friday')
  let newText = '6tou'
  fridaybutton.addEventListener('click', function() {
    for (i = 0; i < friday.length; i++) {
      if (friday[i].innerHTML != newText) {
          friday[i].innerHTML = newText
      } else {
        friday[i].innerHTML  = fridayArrays[i]
      }
    }
  })
}
let fridayArrays = [4, 11 , 18, 25]
changeTextOfFridays(fridayArrays)


function mouserOver() {
  let dates = document.getElementsByClassName('day')
  // dates[0].style.backgroundColor = 'red'
  for (i = 0; i < dates.length; i ++) {
    dates[i].addEventListener('mouseover', function(event) {
      // event.target.style.backgroundColor = 'red'
    event.target.style.fontSize = '30px'
    })
  }
}

function mouseOut() {
  let dates = document.getElementsByClassName('day')
  // dates[0].style.backgroundColor = 'red'
  for (i = 0; i < dates.length; i ++) {
    dates[i].addEventListener('mouseout', function(event) {
      // event.target.style.backgroundColor = 'red'
    event.target.style.fontSize = '20px'
    })
  }
}

mouserOver()
mouseOut()

function addTask(str) {
  let myTasksElement = document.getElementsByClassName('my-tasks')
  let task = document.createElement('span') 
  task.innerText = str
  myTasksElement[0].appendChild(task)
}

addTask('abc')

function addTag(color) {
  let myTasksElement = document.getElementsByClassName('my-tasks')
  let task = document.createElement('div')
  task.style.backgroundColor = color
  task.classList = 'task'
  myTasksElement[0].appendChild(task)

}

addTag('yellow')

function selectTask () {
  let task = document.querySelector('.task')
  let taskSelected = document.getElementsByClassName('task selected')
  task.addEventListener('click', function(event) {
    if(taskSelected.length == 0) {
      event.target.className = 'task selected'
      return
    }
    event.target.className = 'task'
  })
}

selectTask()

function setTaskColorAsDayColor() {
  let dates = document.getElementsByClassName('day')
  let taskSelected = document.getElementsByClassName('task selected')
  for (i = 0; i < dates.length; i++) {
    dates[i].addEventListener('click', function(event) {
      if (taskSelected.length != 0 ) {
          let color = taskSelected[0].style.backgroundColor
          event.target.style.color = color
          return
      }
      event.target.style.color = 'rgb(119,119,119)'
    })
  }
}

setTaskColorAsDayColor()

function addAppointments() {
  let addAppointmentButton = document.querySelector('#btn-add')
  let textBox = document.querySelector('#task-input')
  let listOfAppointments = document.querySelector('.task-list')
  addAppointmentButton.addEventListener('click', function(event) {
    console.log(textBox.value)
    let appointment = document.createElement('il')
    appointment.innerText = textBox.value
    listOfAppointments.appendChild(appointment)
  })
}
addAppointments()

