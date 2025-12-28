# Delete set of keys from Python dictionary

keys_to_remove=["name", "salary"]

sample_dict = {
	"name": "Kelly",
	"age":25,
	"salary": 8000,
	"city": "New York"
}

# keys_to_remove = "name", "salary"

for key in keys_to_remove:
	if key in sample_dict:
		del sample_dict[key]

print(sample_dict)