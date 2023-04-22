import random

def guess():
  with open('words.txt','r') as words:
    words = words.read().split('\n')
  selectedWord = random.choice(words)
  counter = 0
  scrambledWord = ''
  scrambledWord = ''.join(random.sample(selectedWord, len(selectedWord)))
  print(scrambledWord)
  while counter < 3:
    guess = input('Insira um nome: ')
    counter += 1
    if(guess != selectedWord):
      print('Errou rude')
    else:
      print('Acertou')
      return
  print('Acabou')


guess()