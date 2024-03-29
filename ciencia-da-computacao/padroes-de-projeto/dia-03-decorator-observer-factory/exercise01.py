ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# # ou
# print(f"{ROXO}Olá Mundo!{RESET}")


class Log:
    def dispara_log(self,message):
        return message

class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"

class LogWarning:
  def __init__(self, log):
    self.log = log

  def dispara_log(self, message):
    return f"{LARANJA}message{RESET}"

class LogSuccess:
  def __init__(self, log):
      self.log = log

  def dispara_log(self, message):
    
    return f"{VERDE}message{RESET}"


logger = Log()

print(LogError(logger).dispara_log('O sistema está funcionando'))