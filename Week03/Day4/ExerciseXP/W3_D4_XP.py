'''
Exercise 1: Currencies
Goal: Implement dunder methods for a Currency class to handle string representation, integer conversion, 
addition, and in-place addition.
'''

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return str(self)

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            return self.amount + other.amount
        elif isinstance(other, (int, float)):
            return self.amount + other
        else:
            return NotImplemented

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            self.amount += other.amount
        elif isinstance(other, (int, float)):
            self.amount += other
        else:
            return NotImplemented
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#the comment is the expected output
print(c1)
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1) 
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

# print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>

'''
Exercise 2: Import
Goal: Create a module with a function and import it into another file.

Instructions:
Create a func.py file with a function that sums two numbers and prints the result. 
Then, import and call the function from exercise_one.py.

Step 1: Create func.py
Create a file named func.py.
Define a function inside that file that takes two numbers as arguments, sums them, and prints the result.

Step 2: Create exercise_one.py
Create a file named exercise_one.py.
Import the function from func.py using one of the import syntaxes provided in the instructions.
Call the imported function with two numbers.

'''
# see files func.py and exercise_one.py

'''
Exercise 3: String module
Goal: Generate a random string of length 5 using the string module.

Instructions:
Use the string module to generate a random string of length 5, consisting of uppercase and lowercase letters only.

Step 1: Import the string and random modules
Import the string and random modules.

Step 2: Create a string of all letters
Read about the strings methods HERE to find the best methods for this step

Step 3: Generate a random string
Use a loop to select 5 random characters from the combined string.
Concatenate the characters to form the random string.
'''

import string
import random

all_letters = string.ascii_letters

random_string = ''
for n in range(5):
    random_char = random.choice(all_letters)
    random_string += random_char

print("Random string:", random_string)

'''
Exercise 4: Current Date
Goal: Create a function that displays the current date.

Instructions:
Use the datetime module to create a function that displays the current date.

Step 1: Import the datetime module
Step 2: Get the current date
Step 3: Display the date
'''

import datetime
current_date = datetime.date.today()
print("Today's date is:", current_date)

'''
Exercise 5: Amount of time left until January 1st
Goal: Create a function that displays the amount of time left until January 1st.

Instructions:
Use the datetime module to calculate and display the time left until January 1st.

Step 1: Import the datetime module
Step 2: Get the current date and time
Step 3: Create a datetime object for January 1st of the next year
Step 4: Calculate the time difference
Step 5: Display the time difference
'''

import datetime

current_date = datetime.date.today()
now = datetime.datetime.now()
next_year = now.year + 1
new_year = datetime.datetime(year=next_year, month=1, day=1)
time_difference = new_year - now
print("Time until Jan 1:", time_difference)

'''
Exercise 6: Birthday and minutes

Create a function that accepts a birthdate as an argument (in the format of your choice), 
then displays a message stating how many minutes the user lived in his life.
'''

from datetime import datetime

def minutes_lived(birthdate_str):
    try:
    	birthdate = datetime.strptime(birthdate_str, "%d-%m-%Y")
    	now = datetime.now()
    	time_lived = now - birthdate
    	minutes = int(time_lived.total_seconds() / 60)

    	print(f"You have lived for approximately {minutes:,} minutes.")

    except ValueError:
        print("Please enter your birthdate in the format DD-MM-YYYY.")

minutes_lived("30-08-2007")


'''
Exercise 7: Faker Module
Goal: Use the faker module to generate fake user data and store it in a list of dictionaries.

Instructions:
Install the faker module and use it to create a list of dictionaries, 
where each dictionary represents a user with fake data.

Step 1: Install the faker module
Step 2: Import the faker module
Step 3: Create an empty list of users
Step 4: Create a function to add users

Create a function that takes the number of users to generate as an argument.
Inside the function, use a loop to generate the specified number of users.
For each user, create a dictionary with the keys name, address, and language_code.

Use the faker instance to generate fake data for each key:
name: faker.name()
address: faker.address()
language_code: faker.language_code()
Append the user dictionary to the users list.

Call the function and print the users list
'''
# in terminal: pip install Faker

from faker import Faker

fake = Faker()

users = []

def add_users(num_users):
    for i in range(num_users):
        user = {
            "name": faker.name(),
            "address": faker.address(),
            "language_code": faker.language_code()
        }
        users.append(user)

add_users(5)

for user in users:
    print(user)

# SublimeText is giving me the error: ModuleNotFoundError: No module named 'faker'


