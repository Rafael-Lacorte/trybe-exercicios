const readline = require('readline-sync');

const weight = readline.questionFloat('What is your weight?')

const height = readline.questionFloat('What is your height?')

const bmi = weight/(height*height)

if(bmi < 18.5) {
    console.log(`your bmi is ${bmi} and you are under weight `)
    return
}
if(bmi < 25) {
    console.log(`your bmi is ${bmi} and you are normal `)
    return
}
if(bmi < 30) {
    console.log(`your bmi is ${bmi} and you are over weight`)
    return
}
if(bmi < 35) {
    console.log(`your bmi is ${bmi} and you are have level 1 obesity`)
    return
}

if(bmi < 40) {
    console.log(`your bmi is ${bmi} and you are have level 2 obesity`)
    return
}
console.log(`your bmi is ${bmi} and you are have level 1 obesity`)