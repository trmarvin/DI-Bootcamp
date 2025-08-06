# Exercise 1: Cats

'''
Instructions:
Use the provided Cat class to create three cat objects. 
Then, create a function to find the oldest cat and print its details.

Step 1: Create Cat Objects
Use the Cat class to create three cat objects with different names and ages.

Step 2: Create a Function to Find the Oldest Cat
Create a function that takes the three cat objects as input.
Inside the function, compare the ages of the cats to find the oldest one.
Return the oldest cat object.

Step 3: Print the Oldest Cat’s Details
Call the function to get the oldest cat.
Print a formatted string: “The oldest cat is <cat_name>, and is <cat_age> years old.”
Replace <cat_name> and <cat_age> with the oldest cat’s name and age.
'''

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects

cat1 = Cat("Mitzi", 13)
cat2 = Cat("Selina", 5)
cat3 = Cat("Patches", 2)

# Step 2: Create a function to find the oldest cat
    
def find_oldest_cat(cat1, cat2, cat3):
    oldest = max([cat1, cat2, cat3], key=lambda cat: cat.age)
    return oldest

# Step 3: Print the oldest cat's details

oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {oldest_cat.name}, and s/he is {oldest_cat.age} years old.")

# Exercise 2 : Dogs

'''
Instructions:
Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, 
and compare their sizes.

Step 1: Create the Dog Class
Create a class called Dog.
In the __init__ method, take name and height as parameters and create corresponding attributes.
Create a bark() method that prints “ goes woof!”.
Create a jump() method that prints “ jumps cm high!”, where x is height * 2.

Step 2: Create Dog Objects
Create davids_dog and sarahs_dog objects with their respective names and heights.

Step 3: Print Dog Details and Call Methods
Print the name and height of each dog.
Call the bark() and jump() methods for each dog.

Step 4: Compare Dog Sizes
'''
class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

davids_dog = Dog("Boomer", 50)
sarahs_dog = Dog("Zoe", 25)

print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

# Exercise 3 : Who’s the song producer?

'''
Instructions:
Create a Song class with a method to print song lyrics line by line.

Step 1: Create the Song Class
Create a class called Song.
In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.
'''

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics  

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()  # Call the method directly — it prints the lyrics

# Exercise 4 : Afternoon at the Zoo
'''
Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.

Step 1: Define the Zoo Class
1. Create a class called Zoo.

2. Implement the __init__() method:
It takes a string parameter zoo_name, representing the name of the zoo.
Initialize an empty list called animals to keep track of animal names.

3. Add a method add_animal(new_animal):
This method adds a new animal to the animals list.
Do not add the animal if it is already in the list.

4. Add a method get_animals():
This method prints all animals currently in the zoo.

5. Add a method sell_animal(animal_sold):
This method checks if a specified animal exists on the animals list and if so, remove from it.

6. Add a method sort_animals():
This method sorts the animals alphabetically.
It also groups them by the first letter of their name.
The result should be a dictionary where:
Each key is a letter.
Each value is a list of animals that start with that letter.
'''
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped:
                grouped[first_letter] = []
            grouped[first_letter].append(animal)

        return grouped


my_zoo = Zoo("Brooklyn Safari")

my_zoo.add_animal("Zebra")
my_zoo.add_animal("Elephant")
my_zoo.add_animal("Lion")
my_zoo.add_animal("Zebra")  # Duplicate, won't be added

my_zoo.get_animals()

my_zoo.sell_animal("Lion")
my_zoo.get_animals()

grouped_animals = my_zoo.sort_animals()
print("Grouped Animals:", grouped_animals)
