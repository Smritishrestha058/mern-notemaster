def division(num1, num2):
    return num1/num2

def division(*args):
    result=0
    for arg in args:
        result+=arg
    return result