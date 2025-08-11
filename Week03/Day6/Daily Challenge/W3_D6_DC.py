# Part I: Analyzing a Simple String

# Step 1: Create the Text Class
# Create a class called Text.
# The __init__ method should take a string as an argument and store it in an attribute (e.g., self.text).

from enum import unique
from itertools import count
from pydoc import text


class Text:
    def __init__(self, text):
        self.text = text

#Step 2: Implement word_frequency Method
# Create a method called word_frequency(word).

    def word_frequency(self, word):
        # Split the text attribute into a list of words.
        words = self.text.split()
        # Count the occurrences of the given word in the list.
        count = words.count(word)
        # Return the count.
        return count if count > 0 else None

# Step 3: Implement most_common_word Method

# Create a method called most_common_word().
    def most_common_word(self):
        words = self.text.split()
        word_freq = {}
        for word in words:
            word_freq[word] = word_freq.get(word, 0) + 1
        most_common = max(word_freq, key=word_freq.get)
        return most_common

# Split the text into a list of words.
# Use a dictionary to store word frequencies.
# Find the word with the highest frequency.
# Return the most common word.

# Step 4: Implement unique_words Method

# Create a method called unique_words().
    def unique_words(self): 
        words = self.text.split()
        unique = set(words)
        return list(unique)

# Split the text into a list of words.
# Use a set to store unique words.
# Return the unique words as a list.

# Create the Text object
text_obj = Text("The cat chased the cat that chased the cat that chased the ball.")

# Print results
print("Frequency of 'cat':", text_obj.word_frequency("cat"))
print("Most common word:", text_obj.most_common_word())
print("Unique words:", text_obj.unique_words())

# Part II: Analyzing Text from a File

class Text:
    def __init__(self, text):
        self.text = text

    # Step 5: Implement from_file Class Method
    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            content = file.read()
        return cls(content)

file_path = r"G:\\My Drive\\Programming\\DI-Bootcamp\\Week03\\Day6\\Daily Challenge\\text.txt"

text_obj = Text.from_file(file_path)
print(text_obj.text)

# Create a class method called from_file(file_path).
# Open the file text.txt at file_path in read mode.
# Read the file content.
# Create and return a Text instance with the file content as the text.

