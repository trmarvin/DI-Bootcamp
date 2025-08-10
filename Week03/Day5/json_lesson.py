import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
print(dir_path)
# convert a dict to json file

my_family = {
	"parents": ["Beth", "Jerry"],
	"children": ["Summer", "Morty"]
}

# convert a dict to a json file
with open(f"{dir_path}/family.json", "w") as f:
	json.dump(my_family, f)
print(my_family)

# convertin a dict to a json string
json_my_family_string = json.dumps(my_family)
print(json_my_family_string)

#convert from a json file to a dict
with open(f"{dir_path}/family.json", "r") as f:
	my_family2 = json.load(f)

print(type(my_family2))

# convert from json string to a dict
parsed_family = json.loads(json_my_family_string)
print(type(parsed_family))