function encode(str) {
    let code = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    let encoded = '';
    for (let letter of str) {
        if (code[letter] === undefined) {
        encoded += letter;
        } else {
        encoded += code[letter];
        }
    }
    return encoded;
}
  


function decode(str) {
    let code = {
        1: 'a', 
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };
    let decoded = '';
    for (let number of str) {
        if (code[number] === undefined) {
        decoded += number;
        } else {
        decoded += code[number];
        }
    }
    return decoded;
}

const functions = {encode, decode}
  
module.exports = functions
