def fizz_buzz(number):
  data = []
  for n in range(number):
    if ((n+1) % 3 == 0 and (n+1) % 5 == 0):
      data.append('FizzBuzz')
    elif ((n + 1) % 3 == 0):
      data.append('Fizz')
    elif  ((n + 1) % 5 == 0):
      data.append('Buzz')
    else:
      data.append(n+1)

  return data

fizz_buzz(2)