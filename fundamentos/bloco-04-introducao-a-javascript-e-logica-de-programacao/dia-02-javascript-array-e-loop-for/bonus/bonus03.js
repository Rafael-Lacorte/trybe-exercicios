let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i++) {
    if (i < numbers.length -1) {
        numbers[i] *= numbers[i + 1] 
    } else {
        numbers[i] *= 2
    }
}

console.log(numbers)