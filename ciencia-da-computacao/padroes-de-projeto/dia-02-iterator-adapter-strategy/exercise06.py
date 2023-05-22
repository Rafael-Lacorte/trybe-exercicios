from abc import ABC, abstractmethod

class EstrategiaImpostos(ABC):
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError
    
class ISS(EstrategiaImpostos):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1

class ICMS(EstrategiaImpostos):
    def calcular(cls, valor):
        return valor * 0.06

class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)

orcamento = Orcamento(1000)

print(f"ISS: {orcamento.calcular_imposto(ISS)}")
        