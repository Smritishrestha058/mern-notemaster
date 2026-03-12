"""print("Hello, World")

number1 = int(input("Please enter your first number"))
number2 = int(input("Please enter your second number"))

Sum = number1 + number2
Difference = number1 - number2
Product = number1 * number2
Quotient = number1 / number2

print("Sum", Sum)
print("Difference", Difference)
print("Product", Product)
print("Quotient", Quotient)

radius = int(input("Please enter the radius of the circle"))

Area = pi*radius^2

Print("The area of circle is ", Area)

number = int(input("Please enter your number"))

if number%2==0:
    print("The number is even")
else:
    print("The number is odd")



def reverse_string(string):
    return string[::-1]

# Ask the user to enter a string
user_input = input("Enter a string: ")

# Reverse the string
reversed_string = reverse_string(user_input)

# Print the reversed string
print("Reversed string:", reversed_string)

length = int(input("Please enter the length of the rectangle"))
breadth = int(input("Please enter the breadth of the rectangle"))

Area = length * breadth
Perimeter = 2*(length + breadth)

print("The area is ",Area)
print("The perimeter is ",Perimeter)"""


number1 = int(input("Please enter your first number"))
number2 = int(input("Please enter your second number"))
operator = (input("Enter your operator"))

if operator=="+":
    print("The output is ", number1 + number2)
elif operator=="-":
    print("The output is ", number1 - number2)
elif operator=="*":
    print("The output is ", number1 * number2)
else:
    print("The output is ", number1 / number2)