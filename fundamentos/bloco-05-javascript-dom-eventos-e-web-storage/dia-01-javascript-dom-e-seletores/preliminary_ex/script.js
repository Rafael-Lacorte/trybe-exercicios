let header = document.getElementById('header-container')
header.style.color = 'black'
header.style.backgroundColor = 'lightgreen'

let footer = document.getElementById('footer-container')
footer.style.backgroundColor = '#283d3b'

let emergencyTasksSection = document.getElementsByClassName("emergency-tasks")
emergencyTasksSection[0].style.backgroundColor = 'salmon'

let emergencyTasksClass = document.getElementsByClassName("emergency-tasks")
let emergencyTasksText = emergencyTasksClass[0].getElementsByTagName('h3')


console.log(emergencyTasksText)
emergencyTasksText[0].style.backgroundColor = 'black'