from collections import Counter


class Estatistica:
  def __init__(self, numbers):
    self.numbers = numbers

  def media(self):
    total = 0
    for n in self.numbers:
      total += n
    return total/len(self.numbers)

  def mediana(self):
    tamanho = len(self.numbers)
    if (tamanho % 2 != 0):
      return sorted(self.numbers)[tamanho // 2]
    else:
      return (sorted(self.numbers)[tamanho // 2 - 1] + sorted(self.numbers)[tamanho // 2])/2

  def moda(self):
    counter = Counter(self.numbers)
    mode = counter.most_common(1)[0][0]
    return mode

teste = Estatistica([1,1,1,5, 5, 5, 5, 5, 5])

print(teste.moda())