# lists eample

for char in "Harry":
	print(char)

# tuples and sets

languages = ("PT", "ES", "IT")
for lang in languages:	
	print(lang)

# a range in a sequence

for i in range(1, 11):
	print("hello", i)

for i in range(1, 11, 2):
	print("hello", i)

# *for i in 10:
	# *print(i)

fruits = ["apple", "banana", "kiwi"]

for i in fruits:
	print(f"fruit {i} is {fruit}")

for i in enumerate(fruits):
	print(f"fruit {i} is {fruit}")


# while loop

i = 0
while i < len(fruits):
	print(i)
	i += 1