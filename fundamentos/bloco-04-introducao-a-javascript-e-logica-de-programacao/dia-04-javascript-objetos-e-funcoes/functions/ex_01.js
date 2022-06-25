function isPalindrome(word) {
    reversedWord = ''
    for (i = word.length - 1; i >= 0; i--){
        reversedWord += word[i]
    }
    return reversedWord === word
}

console.log(isPalindrome('tenet'))