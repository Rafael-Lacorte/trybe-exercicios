function getSumOfallPreviousNumber(number) {
    sum = 0
    for (i = 0; i <= number; i++){
        sum += i
    }
    return sum
}


let number = 5

console.log(getSumOfallPreviousNumber(number))