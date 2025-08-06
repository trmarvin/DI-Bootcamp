'''
Challenge 1: Sorting

Instructions:
Write a Python program that takes a single string of words as input, where the words are separated by commas (e.g., ‘apple,banana,cherry’). The program should output these words sorted in alphabetical order, with the sorted words also separated by commas.

Step 1: Get Input
Use the input() function to get a string of words from the user.
The words will be separated by commas.

Step 2: Split the String
Step 3: Sort the List
Step 4: Join the Sorted List
Step 5: Print the Result
Print the resulting comma-separated string.

Expected Output:
If the input is without,hello,bag,world, the output should be bag,hello,without,world.
'''

input_string = input("Enter words separated by commas: ")

words_list = input_string.split(',')

words_list.sort()

sorted_string = ','.join(words_list)

print("Sorted words:", sorted_string)

'''
Challenge 2: Longest Word

Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple longest words, return the first one encountered. Characters like apostrophes, commas, and periods should be considered part of the word.

Step 1: Define the Function
Define a function that takes a string (the sentence) as a parameter.

Step 2: Split the Sentence into Words

Step 3: Initialize Variables

Step 4: Iterate Through the Words

Step 5: Compare Word Lengths

Step 6: Return the Longest Word

Expected Output:
longest_word("Margaret's toy is a pretty doll.") should return "Margaret's".
longest_word("A thing of beauty is a joy forever.") should return "forever.".
longest_word("Forgetfulness is by all means powerless!") should return "Forgetfulness".
'''

def longest_word(sentence):
    words = sentence.split()
    longest_word = ''
    max_length = 0

    for word in words:
        # Step 5: Compare word lengths
        if len(word) > max_length:
            longest_word = word
            max_length = len(word)

    return longest_word

print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))