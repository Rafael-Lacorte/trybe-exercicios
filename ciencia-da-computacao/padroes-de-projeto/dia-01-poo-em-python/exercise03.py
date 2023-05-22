from abc import ABC, abstractmethod
import math


class FiguraGeometrica(ABC):
  @abstractmethod
  def area(self):
    ...

  @abstractmethod
  def perimetro(self):
    ...

class Quadrado(FiguraGeometrica):
  def __init__(self, side):
    self.__side = side
  
  def area(self):
    return self.__side ** 2

  def perimetro(self):
    return self.__side * 4

class Retangulo(FiguraGeometrica):
  def __init__(self, base, height):
    self.__base = base
    self.__height = height

  
  def area(self):
    return self.__base * self.__height

  def perimetro(self):
    return self.__base * 2 + self.__height * 2

class Circulo(FiguraGeometrica):
  def __init__(self, raio,):
    self.__raio = raio

  
  def area(self):
    return self.__raio ** 2 * math.pi

  def perimetro(self):
    return self.__raio * 2 * math.pi

teste = Circulo(3)

print(teste.area())

print(teste.perimetro())