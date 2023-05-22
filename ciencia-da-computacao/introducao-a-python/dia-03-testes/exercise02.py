def number_translator(frase):
  dictionary = {
    'ABC': 2,
    'DEF': 3,
    'GHI': 4,
    'JKL': 5,
    'MNO': 6,
    'PQRS': 7,
    'TUV': 8,
    'WXYZ': 9,
  }

  number = ''

  for letter in frase:
    if(letter == '1' or letter == '0' or letter == '-'):
      number += letter
    else: 
      for key, value in dictionary.items():
        if (letter in key):
          number += str(value)

  return number
number_translator('MY-MISERABLE-JOB')