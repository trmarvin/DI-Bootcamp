import random

# Loops: for and while

#for <variable> in <sequence>

# what are the sequences that we know in python?
# Strings

for char in "Student":
    print(char)

#Lists, Sets, and Tuples

fruits = ["apple", "banana", "watermelon"]
for fruit in fruits:
    print(f"I love {fruit}")

# Dictionary
# -keys()
# -values()
# -items()

student_info = {
    "first_name": "Harry",
    "last_name": "Potter",
}

for k in student_info.keys():
    print(k)

for v in student_info.values():
    print(v)

for k, v in student_info.items():
    print(v)

# Range
for i in range(1, 11):
    print(i)

# Enumerate

fruits = ["apple", "banana", "watermelon"]
for fruit in fruits:
    if fruit == "banana":
        fruit = "kiwi" # this changes the element just on the loop (not on the sequence)
    print(f"I love {fruit}")

print(fruits)

fruits = ["apple", "banana", "watermelon"]
for i, fruit in enumerate(fruits):
    if fruit == "banana":
        fruits[i] = "kiwi" 
    print(f"I love {fruit}")

# fruits.insert(1, "kiwi")

print(fruits)

# While Loops

toppings = []

while True:
    top = input("Enter the topping you want or 'q' to finish: ")
    if top == 'q':
        break
    toppings.append(top)
print(f"Thanks for choosing us. Here are your toppings: {toppings}")

# While + Flag

game_continue = True

while game_continue:
    guess = int(input("guess a number between 1 and 50: "))
    computer_num = random.randint(1, 50)

    if guess == computer_num:
        print("Congratulations! You've guessed the right number.")
        game_continue = False # the flag is changed on the loop
    else:
        print(f"Sorry, the correct number was {computer_num}.")