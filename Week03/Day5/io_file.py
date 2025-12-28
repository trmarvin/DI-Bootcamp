import os

dir_path = os.path.dirname(os.path.realpath(__file__))

# with open(f"{dir_path}\file.txt", "r", "encoding="utf-8) as file_obj:

# Star Wars

# Read the file line by line

with open(f'{dir_path}/star_wars.txt', 'r', encoding="utf-8") as f:
	txt_list = f.readlines()
	for line in txt_list:
		print(line)
	print('end of document')

# Read only the 5th line of the file
	print(txt_list[4])

# Read only the 5 first characters of the file
print(txt_list[0][:4])

# Read all the file and return it as a list of strings. Then split each word into letters.
# using list comprehension

#temp = []
# for line in txt_list:
	# temp.append(line.split())
temp = [list(line) for line in txt_list]
print(temp)

#Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
counts = {"Darth": 0, "Luke": 0, "Lea": 0}
for line in txt_list:
	line = line.strip()
	if line == "Darth":
		counts["Darth"] += 1
	elif line == "Luke":
		counts["Luke"] += 1
	elif line == "Lea":
		counts["Lea"] += 1
print(counts)

# Append your first name at the end of the file
with open(f'{dir_path}/star_wars.txt', 'a', encoding="utf-8") as f:
	# f.seek(0) # the cursor goes to the beginning of the file
	f.seek(0, os.SEEK_END) # we make sure the cursor is at the end of the file
	f.write('\nTamar')
	print("successfully added")

# Append "SkyWalker" next to each first name "Luke"

# for i, name in enumerate(txt_list):
	# if name.strip() == "Luke":
		# txt_list[i] = f"{name} Skywalker"
# print("Successfully changed")

modified_lines = []
for line in txt_list:
	if line.strip() == "Luke":
		modified_lines.append("Luke Skywalker\n")
	else: 
		modified_lines.append(line)

with open(f'{dir_path}/star_wars.txt', 'w', encoding="utf-8") as f:
	f.seek(0) # makes sure the cursor is at the beginning of the file
	f.writelines(modified_lines)

# Challenge: make this six lines