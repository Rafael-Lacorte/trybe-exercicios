
function getNumberMoreOftenRepeated(array) {
    let highestNumberOfRepetitions = 1
    let NumberOfRepetitions = 0
    //let numberMoreOftenRepeated
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++){
            if (array[i] == array[j]) {
                NumberOfRepetitions += 1
            }
            if (highestNumberOfRepetitions < NumberOfRepetitions) {
                highestNumberOfRepetitions = NumberOfRepetitions
                numberMoreOftenRepeated = array[i]
            }
        }
    }
    return numberMoreOftenRepeated
}

let numbers = [2, 3, 2, 5, 8, 2, 3]

console.log(getNumberMoreOftenRepeated(numbers))