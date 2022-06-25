let array = [2, 3, 6, 7, 10, 1]

function biggestValueKey(array) {
    biggestValue = -Infinity
    keyOftheBiggestValue = 0
    for (i = 0; i < array.length; i ++){
        if (biggestValue < array[i]) {
            biggestValue = array[i]
            keyOftheBiggestValue = i
        }
    }
    return keyOftheBiggestValue
}


console.log(biggestValueKey(array))