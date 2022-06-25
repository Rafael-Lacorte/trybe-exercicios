function convertStringInRomanNumeralsToInt(RomanNumeral) {
    RomanNumeral.toUpperCase()
    let RomanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (letter of RomanNumeral) { 
        counterOfOnes = 0
        if (letter == 'I'){
            allOnes = true
            counterOfOnes +=1
        }
        if (allOnes == true){
             return RomanNumerals[letter] * counterOfOnes 
        }
    }
}

console.log(
    convertStringInRomanNumeralsToInt('iii')
)