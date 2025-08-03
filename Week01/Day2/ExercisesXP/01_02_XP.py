# Exercise 1

print("Hello world \n" * 4)

# Exercise 2
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

print(99 ** 3 * 8)

# Exercise 3
# Predict the output of the following code snippets:

# >>> 5 < 3 False
# >>> 3 == 3 True
# >>> 3 == "3" True
# >>> "3" > 3 False
# >>> "Hello" == "hello" False

# Exercise 4

computer_brand = "HP"

print(f"I have a {computer_brand} computer.")

# Exercise 6

a = 7
b = 3

if a > b:
	print("Hello World")

# Exercise 7

user_number = input("Enter a number.")
num = int(user_number)

if num % 2 == 0:
	print("Your number is even.")
else:
	print("Your number is odd.")

# Exercise 8
# Write code that asks the user for their name and 
# determines whether or not you have the same name. 
# Print out a funny message based on the outcome.

my_name = "Tamar"
user_name = input("What is your name?")

if user_name == "Tamar":
	print("What an excellent name!")
else:
	print("Almost as good as Tamar.")

# Exercise 9

height = input("Please enter your height in centimeters.")
height_num = int(height)

if height_num > 145:
	print("You are tall enough to ride!")
else:
	print("Sorry, you are not tall enough to ride.")
