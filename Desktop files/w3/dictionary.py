student = {
    "name": "John",
    "age": 20,
    "university": "ABC university"
}
print(student)

print(student["name"])

print(len(student))

student["age"]=21
print(student)

student["major"]="Computer Science"
print(student)

student.pop("university")
print(student)

x = student.keys()
print(x)

y = student.values()
print(y)

student.clear()
print(student)