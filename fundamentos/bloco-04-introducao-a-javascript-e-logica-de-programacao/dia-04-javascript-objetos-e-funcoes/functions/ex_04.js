let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function longestName(array) {
    longestName = ''
    for (i = 0; i < array.length; i++){
        if (longestName.length < array[i].length) {
            longestName = array[i]
        }
    }
    return longestName
}


console.log(longestName(array))