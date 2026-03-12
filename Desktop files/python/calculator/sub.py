def subtraction(num1, num2):
    return num1-num2

def subtraction(*args):
    result=0
    for arg in args:
        result+=arg
    return result