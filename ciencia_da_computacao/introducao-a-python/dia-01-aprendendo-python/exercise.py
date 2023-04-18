def getHigherNumber(a,b):
  if (a > b):
    return a
  else:
    return b


def getMean(array):
  total = 0
  length =  len(array)
  for n in array:
    total += n

  return total/length


def makeSquare(n):
  counter = 0
  while counter < n:
    print(n* '*')
    counter += 1

def getLongestName(array):
  longestName = ''
  for name in array:
    if len(name) > len(longestName):
      longestName = name
  return longestName

def getPaintCansAndCostBysquareMeter(n):
  liters =  n / 3
  print(liters)
  cans = liters // 18
  if liters % 18:
    cans += 1
  price = cans * 80
  return (cans, price)

def whatTriangle(a,b,c):
  if not (a + b > c and a + c > b and c + b > a):
    'Não é um triangulo'
  if(a == b == c):
    return 'Equilatero'
  elif(a == b or b == c or c == a):
    return 'Isósceles'
  elif(a != b != c):
      return 'Escaleno'

  
print(whatTriangle(2,2,1))

