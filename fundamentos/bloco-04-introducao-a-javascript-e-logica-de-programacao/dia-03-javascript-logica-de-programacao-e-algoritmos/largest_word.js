let array = ['java', 'javascript', 'python', 'html', 'css'];
let largestWord = ''
for (word of array) {
    if (word.length > largestWord.length){
        largestWord = word
    }
}

console.log(largestWord)