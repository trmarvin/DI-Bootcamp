string = input("Enter text that is 10 characters long.")
# char_count = int(string)

if len(string) < 10:
	print("String not long enough.")
elif len(string) > 10:
	print("String too long.")
else:
	print("Perfect string.")

first_char = string[0]
last_char = string[9]

if len(string) == 10:
	print(first_char + " " + last_char)

def build_string(string):
	for char in range(1, len(string) + 1):
		print(string[:char])

print(build_string(string))

