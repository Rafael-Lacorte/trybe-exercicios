let array = [2, 4, 6, 7, 10, 0, -3]

function smallestValueKey(array) {
    smallestValue = Infinity
    keyOftheSmallestValue = 0
    for (i = 0; i < array.length; i++){
        if (smallestValue > array[i]) {
            smallestValue = array[i]
            keyOftheSmallestValue = i
        }
    }
    return keyOftheSmallestValue
}


console.log(smallestValueKey(array))