class Tv:
  @property
  def volume(self):
    return self.__volume

  def aumentar_volume(self):
    print('Aumentando o volume')
    if (0 < self.__volume < 99):
      self.__volume += 1

  def diminuir_volume(self):
    print('Diminuindo o volume')
    if (0 < self.__volume < 99):
      self.__volume -= 1

  @property
  def canal(self):
    return self.__canal
  
  def canal(self, novo_canal):
    self.__canal = novo_canal

  @property
  def tamanho(self):
    return self.__tamanho

  @property
  def ligada(self):
    return self.__ligada

  def ligar_desligar(self):
    self.__ligada = True if self.__ligada == False else False

  def __init__(self, tamanho):
    self.__tamanho = tamanho
    self.__volume = 50
    self.__canal = 1
    self.__ligada = False

minha_tv = Tv(50)
minha_tv.ligar_desligar()

print(minha_tv.ligada)

minha_tv.ligar_desligar()

print(minha_tv.ligada)