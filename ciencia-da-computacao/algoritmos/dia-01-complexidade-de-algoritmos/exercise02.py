from random import randint

def create_array(n):
  array = []
  for i in range(100):
    number = 0
    for item in range(n):
      number += randint(0,n)
    array.append(number/n)
  return array
print(create_array(10))