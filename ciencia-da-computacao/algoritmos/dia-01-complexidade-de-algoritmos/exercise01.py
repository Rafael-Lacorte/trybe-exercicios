# def contains_duplicate(numbers):
#     numbers.sort()
#     for number in numbers:
#       counter = 0
#       for number_b in numbers:
#         if number == number_b:
#           counter +=1
#           if counter == 2:
#             return True


#     return False

def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if(previous_number == number):
            return True
        previous_number = number
    return False



print(contains_duplicate([1,2,3,3]))