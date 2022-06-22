let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index++) {
    for (secondIndex = 0; secondIndex < index; secondIndex++) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index]
            numbers[index] = numbers[secondIndex]
            numbers[secondIndex] = position
        }
    }
}

console.log(numbers)
