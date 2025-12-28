# Exercise 1

import random
import sys

# Step 1: Create the get_words_from_file function

# Create a function named get_words_from_file that takes the file path as an argument.
# # Open the file in read mode ("r").
# Read the file content.
# Split the content into a list of words.
# Return the list of words.

def get_words_from_file(file_path):
    with open(file_path, "r") as file:
        content = file.read() 
        return content.split() 
    return content

words = get_words_from_file(r"C:\Users\trmar\Downloads\words.txt")
print(words)

# Step 2: Create the get_random_sentence function

# Create a function named get_random_sentence that takes the sentence length as an argument.
# Call get_words_from_file to get the list of words.
# Select a random word from the list length times.
# Create a sentence with the selected words.
# Convert the sentence to lowercase.
# Return the sentence.

def get_random_sentence(length):
    words = get_words_from_file(r"C:\Users\trmar\Downloads\words.txt")
    return ' '.join(random.choice(words) for _ in range(length))

print(get_random_sentence(5))

# Step 3: Create the main function

# Create a function named main.
def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program generates a random sentence from a list of words.")

# Ask the user for the desired sentence length.
user_input = input("Please enter the desired sentence length (2-20): ")
print(user_input)

# Validate the user input:
# Check if it is an integer.
if not user_input.isdigit():
    print("Invalid input.")
    sys.exit()

length = int(user_input)

# Check if it is between 2 and 20 (inclusive).
    # If the input is valid, call get_random_sentence with the length and print the 
    # generated sentence.

if length >= 2 and length <= 20:
    print("Generated Sentence:")
    print(get_random_sentence(length))

# If the input is invalid, print an error message and exit.
else:
    print("Invalid input.")
    sys.exit()



# Exercise 2

import json

# Step 1: Load the JSON string
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Parse JSON string into a dictionary
data = json.loads(sampleJson)

# Step 2: Access the nested "salary" key


# Step 3: Add the "birth_date" key
data["company"]["employee"]["birth_date"] = "1990-05-15"

# Step 4: Save the modified JSON to a file
with open("modified_data.json", "w") as file:
    json.dump(data, file, indent=4)
# ^^^ I could not figure out how to put it in a specific place and not the DI-Bootcamp directory

print("Modified JSON saved to 'modified_data.json'")
