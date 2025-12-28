# Challenge 1: Letter Index Dictionary

'''
1. User Input:

Ask the user to enter a word.
Store the input word in a variable.

2. Creating the Dictionary:

Iterate through each character of the input word using a loop.
And check if the character is already a key in the dictionary.
If it is, append the current index to the list associated with that key.
If it is not, create a new key-value pair in the dictionary.
Ensure that the characters (keys) are strings.
Ensure that the indices (values) are stored in lists.

3. Expected Output:

For the input “dodo”, the output should be: {"d": [0, 2], "o": [1, 3]}.
For the input “froggy”, the output should be: {"f": [0], "r": [1], "o": [2], "g": [3, 4], "y": [5]}.
For the input “grapes”, the output should be: {"g": [0], "r": [1], "a": [2], "p": [3], "e": [4], "s": [5]}.
'''

word = input("Enter a word: ")

char_indices = {}

for index, char in enumerate(word):
    if char in char_indices:
        char_indices[char].append(index)
    else:
        char_indices[char] = [index]

print("Character index dictionary:")
print(char_indices)

# Challenge 2: Affordable Items

'''
1. Store Data:

You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign).
You will also be given a string (wallet) representing the amount of money you have.

2. Data Cleaning:

3. Determining Affordable Items:

4. Sorting and Output:

Sort the list of affordable items in alphabetical order.
If the list is empty (no items can be afforded), return the string “Nothing”.
Otherwise, return the sorted list.
'''

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

def affordable_items(items_purchase, wallet):
    wallet_amount = int(wallet.replace("$", "").replace(",", ""))

    affordable = []

    for item, price_str in items_purchase.items():
        price = int(price_str.replace("$", "").replace(",", ""))
        
        if price <= wallet_amount:
            affordable.append(item)

    if not affordable:
        return "Nothing"
    else:
        return sorted(affordable)

result = affordable_items(items_purchase, wallet)
print(result)
