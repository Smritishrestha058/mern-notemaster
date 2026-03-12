import random

random_integer = random.randint(0,10)
random_float=random.random()
#choices and choice
thislist=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
sequence = "abedefghijklnnopqrstuvwxyz0123456789"
random_choices = random.choices(sequence,k=10)
random_choice = random.choice(sequence)
print("choices:",random_choices)