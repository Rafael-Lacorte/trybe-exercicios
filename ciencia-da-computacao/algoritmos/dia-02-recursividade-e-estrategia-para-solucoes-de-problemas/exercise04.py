# def mdc(n1, n2):
#   if 



# 10 20 / 2
# 5  5 / 2
# 5  5 / 5
# 1 1

def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)

print(mdc(10, 20))

print(10 % 20)
