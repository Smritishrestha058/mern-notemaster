numbers=[4,3,2,5,1]
print(numbers)

print(numbers[0])
print(numbers[2])
print(numbers[4])

subset=numbers[1:3]
print(subset)

numbers.append(6)
print(numbers)

print(len(numbers))

sorted_numbers=sorted(numbers)
print(sorted_numbers)

count=numbers.count(3)
print("The number of occurences of the number 3 in the list is ",count)

numbers.remove(4)
print(numbers)

more_numbers=[7,8,9]
combined_numbers=numbers+more_numbers
print(combined_numbers)

squares=[x*x for x in range(1,6)]
print(squares)
