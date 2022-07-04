
let backgroundColorBtn = document.getElementById('setBackgroundColor')


function setBackgroundColor() {
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor')
}

backgroundColorBtn.addEventListener('click', function() {
    let color = document.getElementById('backgroundColor-input')
    localStorage.setItem('backgroundColor', color.value)
    setBackgroundColor()
})

let textColorButton = document.getElementById('setTextColor')

function setTextColor() {
    document.body.style.color = localStorage.getItem('textColor')
}

textColorButton.addEventListener('click', function() {
    let color = document.getElementById('color-input')
    localStorage.setItem('textColor', color.value)
    setTextColor()
})

let fontSizeBtn = document.getElementById('setFontSize')


function setFontSize() {
    document.body.style.fontSize = localStorage.getItem('fontSize')
}

fontSizeBtn.addEventListener('click', function() {
    let size = document.getElementById('fontSize-input')
    localStorage.setItem('fontSize', size.value + 'px')
    setFontSize()
})
////
let letterSpacingBtn = document.getElementById('setLetterSpacing')

function setLetterSpacing() {
    document.body.style.letterSpacing = localStorage.getItem('letterSpacing')
}

letterSpacingBtn.addEventListener('click', function() {
    let spacing = document.getElementById('letterSpacing-input')
    localStorage.setItem('letterSpacing', spacing.value + 'px')
    setLetterSpacing()
})
/////////////////
let fontFamilyBtn = document.getElementById('setFontFamily')

function setfontFamily() {
    document.body.style.fontFamily = localStorage.getItem('fontFamily')
}

fontFamilyBtn.addEventListener('click', function() {
    let family = document.getElementById('fontFamily-input')
    localStorage.setItem('fontFamily', family.value)
    setfontFamily()
})



window.onload = function() {
    setBackgroundColor();
    setTextColor();
    setFontSize();
    setLetterSpacing();
    setfontFamily()
} 

console.log(
    document.getElementsByTagName('p')
)