# from tokenize import Whitespace
import anagram_checker

# Show a menu, offering the user to input a word or exit. Keep showing the menu until 
# the user chooses to exit.

def show_menu():
    print("1. Check Anagram")
    print("2. Exit")

while True:
    show_menu()
    choice = input("Enter your choice: ")
    if choice == "1":
        word = input("Enter a word: ")
    elif choice == "2":
        print("Exiting...")
        break

# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. 
# (Hint: how do we know how many words were typed?)

if len(word.split()) > 1:
    print("Error: Only a single word is allowed.")
    continue

# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.

word = word.strip()
if not word.isalpha():
    print("Error: Only alphabetic characters are allowed.")
    continue

# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.

anagram_checker_instance = anagram_checker.AnagramChecker('word_list.txt')
anagrams = anagram_checker_instance.get_anagrams(word)

# Display the information about the word in a user-friendly, nicely-formatted message such as:

if anagrams:
    print(f"Anagrams found for '{word}': {', '.join(anagrams)}")
else:
    print(f"No anagrams found for '{word}'.")