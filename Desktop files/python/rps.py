import random
def display_choices (com,user):
    print("Computer Choice: ",com)
    print("User Choice: ",user)
if __name__== "__main__":
    choices =["rock","paper","scissor"]
    comp_choice = random.choice (choices)
    user_choice = input ("Enter your choice:\
                          \n1. rock\
                          \n2. paper\
                          \n3. scissor\n ")
    user = user_choice.lower()
    if user in choices:
        if comp_choice == user:
            display_choices (comp_choice, user_choice) 
            print ("Draw.")
        elif (
            comp_choice =="rock" and user == "paper"
            or comp_choice =="paper" and user == "Scissor"
            or comp_choice =="rock" and user =="rock"):
            display_choices(comp_choice,user)
            print("You Won")
        else:
            display_choices(comp_choice,user)
            print("You Lose")
    else:
        print("Invalid choice")
