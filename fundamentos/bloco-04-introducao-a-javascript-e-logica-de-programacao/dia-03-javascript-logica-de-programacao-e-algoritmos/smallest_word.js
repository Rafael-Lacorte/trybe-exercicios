let array = ['java', 'javascript', 'python', 'html', 'css'];
let str = 'a'
let smallestWord = str.repeat(9**9)
for (word of array) {
    if (word.length < smallestWord.length){
        smallestWord = word
    }
}

console.log(smallestWord)
