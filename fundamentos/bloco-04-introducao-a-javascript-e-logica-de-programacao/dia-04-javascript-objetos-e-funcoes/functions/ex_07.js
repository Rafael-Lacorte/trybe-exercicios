function isEnding(word, possibleEnding) {
    wordEnding = ''
    for (let i = word.length - possibleEnding.length; i < word.length; i++) {
        wordEnding += word[i]
    }
    console.log(wordEnding)
    return wordEnding == possibleEnding
}

console.log(isEnding('xablau', 'au'))