#1
number1 = int(input("Enter the first number"))
number2 = int(input("Enter the second number"))

addition=number1+number2
subtraction=number1-number2
multiplication=number1*number2
division=number1/number2

print("addition", addition)
print("Subtraction", subtraction)
print("multiplication", multiplication)
print("division", division)

#2
number1 = int(input("Enter the first number"))
number2 = int(input("Enter the second number"))

if number1>number2:
    print("number1 is greater than number2")
elif number1<number2:
    print("number2 is greater than number1")
else:
    print("Number1 is equal to number2")


number = int(input("Enter a number"))

for x in range(1,number+1):
    if number%x==0:
       print(x)

for index in range(2,51,2):
    print(index)"""

user_input=input("Enter a number")

number=int(user_input)
print(number)