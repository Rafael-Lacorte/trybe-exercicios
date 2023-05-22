from abc import ABC, abstractmethod

class Alarme:
  def __init__(self):
    self.__rotinas = []
  
  def adicionar_rotinas(self, rotina):
    self.__rotinas.append(rotina)

  def acionar_rotinas(self):
    for rotina in self.__rotinas:
      rotina.acionar()
  
  def despertar(self):
    print('TRIIIIIIIIM, TRIIIIIIIIM')
    self.acionar_rotinas()

class Acionador(ABC):
  @abstractmethod
  def acionar(self):
    pass

class AcenderLuzer(Acionador):
  def __init__(self, alarme):
    self.alarme = alarme
    self.alarme.adicionar_rotinas(self)

  def acionar(self):
    print('Acendendendo as luzes')

class PrepararCafe(Acionador):
  def __init__(self, alarme):
    self.alarme = alarme
    self.alarme.adicionar_rotinas(self)

  def acionar(self):
    print('Preparando Cafe')

class LigarComputador(Acionador):
  def __init__(self, alarme):
    self.alarme = alarme
    self.alarme.adicionar_rotinas(self)

  def acionar(self):
    print('Ligando o PC')

meu_alarme = Alarme()

LigarComputador(meu_alarme)

meu_alarme.despertar()
