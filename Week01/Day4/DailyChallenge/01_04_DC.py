# Challenge 1: Multiples of a Number


number = int(input("Enter a whole number: "))
length = int(input("Enter the desired length of the list (whole number): "))

multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)

print("List of multiples:", multiples)

# Challenge 2: Remove Consecutive Duplicate Letters

string = input("Enter a word with extra letters (example: ppoeemm).")

result = ""
for i in range(len(string)):
    if i == 0 or string[i] != string[i - 1]:
        result += string[i]

print("Corrected word:", result)