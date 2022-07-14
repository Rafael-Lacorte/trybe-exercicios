let clickCount = 0
let pElement = document.getElementById('counter')
console.log(pElement)

window.addEventListener('click', function() {
    clickCount++
    pElement.innerText = clickCount
})