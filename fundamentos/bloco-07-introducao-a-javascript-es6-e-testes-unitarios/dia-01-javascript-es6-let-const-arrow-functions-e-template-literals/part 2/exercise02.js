
const longestWord = (frase) => {
    let array = frase.split(' ')
    let longestWord = ''
    for (i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i]
        }
    }

    console.log(longestWord)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

