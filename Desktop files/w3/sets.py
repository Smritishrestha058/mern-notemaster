fruits={"apple","banana","orange"}
print(fruits)

print(len(fruits))

fruits.add("kiwi")
print(fruits)

fruits.remove("banana")
print(fruits)

more_fruits={"mango","pineapple"}
all_fruits=fruits.union(more_fruits)
print(all_fruits)

common_fruits={"apple","orange"}
selected_fruits=fruits.intersection(common_fruits)
print(selected_fruits)

unique_fruits={"kiwi","grape"}
remaining_fruits=fruits.symmetric_difference(unique_fruits)
print(remaining_fruits)

if "apple" in fruits:
    print("Yes, apple is present in the fruits set")

fruits.clear()
print(fruits)

squares={x*x for x in range(1,6)}
print(squares)