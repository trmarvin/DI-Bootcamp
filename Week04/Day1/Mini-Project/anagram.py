import anagram_checker

def show_menu():
    print("1. Check Anagram")
    print("2. Exit")

def get_valid_word():
    """Ask user for a word and validate it. Returns the valid word, or None if invalid."""
    word = input("Enter a word: ")

    # Validation: single word only
    if len(word.split()) > 1:
        print("Error: Only a single word is allowed.")
        return None

    # Strip whitespace
    word = word.strip()

    # Validation: only alphabetic characters
    if not word.isalpha():
        print("Error: Only alphabetic characters are allowed.")
        return None

    return word

# Main program loop
while True:
    show_menu()
    choice = input("Enter your choice: ")

    if choice == "1":
        word = get_valid_word()
        if word is None:
            continue  # Back to menu

        # If valid, find anagrams
        anagram_checker_instance = anagram_checker.AnagramChecker('G:\\My Drive\\Programming\\DI-Bootcamp\\Week04\\Day1\\Mini-Project\\sowpods.txt')
        anagrams = anagram_checker_instance.get_anagrams(word)

        if anagrams:
            print(f"Anagrams found for '{word}': {', '.join(anagrams)}")
        else:
            print(f"No anagrams found for '{word}'.")

    elif choice == "2":
        print("Exiting...")
        break

    else:
        print("Invalid choice. Please enter 1 or 2.")