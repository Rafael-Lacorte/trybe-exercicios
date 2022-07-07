let clearBtn = document.getElementById('clear-btn')



clearBtn.addEventListener('click', function() {
    let formElements = document.querySelectorAll('input')
    let textArea = document.querySelector('textarea')

    for (let i = 0; i < formElements.length; i++) {
        userInput = formElements[i]
        userInput.value = ''
        userInput.checked = false;
    }
    textArea.value = ''
})

window.onload = function() {
    let submitBtn = document.getElementById('submit-btn')
    submitBtn.addEventListener('click', function(event) { 
        event.preventDefault()
    })
}