# Exercise 1: Converting Lists into Dictionaries
# You are given two lists. Convert them into a dictionary where the first list contains the keys 
# and the second list contains the corresponding values.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dict = dict(zip(keys, values))

print(my_dict)

# Exercise 2: Cinemax #2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name.capitalize()}'s ticket: ${price}")
    total_cost += price

print(f"\nTotal cost: ${total_cost}")

# Allow input of family names and ages

family = {}
total_cost = 0

num_members = int(input("How many family members? "))

for i in range(num_members):
    name = input(f"Enter name of family member #{i + 1}: ")
    age = int(input(f"Enter age of {name}: "))
    family[name] = age

print("\nTicket Prices:")
# Calculate ticket prices
for name, age in family.items():
    if age < 3:
        price = 0

 # Exercise 3: Zara
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name.capitalize()}'s ticket: ${price}")
    total_cost += price

print(f"\nTotal cost: ${total_cost}")

# Exercise 3: Zara

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 1. Change the value of number_stores to 2
brand["number_stores"] = 2

# 2. Print a sentence describing Zara’s clients
print("Zara caters to:", ", ".join(brand["type_of_clothes"]))

# 3. Add a new key country_creation with the value Spain
brand["country_creation"] = "Spain"

# 4. Add “Desigual” to international_competitors if it exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 5. Delete the creation_date key
if "creation_date" in brand:
    del brand["creation_date"]

# 6. Print the last item in international_competitors
print("Last international competitor:", brand["international_competitors"][-1])

# 7. Print the major colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# 8. Print the number of keys in the dictionary
print("Number of keys in brand:", len(brand))

# 9. Print all keys of the dictionary
print("Keys in brand:", list(brand.keys()))