'''
Exercise 1: Pets

Instructions:
Use the provided Pets and Cat classes to create a Siamese breed, instantiate cat objects, and use the Pets class to manage them.
See the example below, before diving in.

Step 1: Create the Siamese Class
Create a class called Siamese that inherits from the Cat class.
You can add any specific attributes or methods for the Siamese breed, or leave it as is if there are no unique behaviors.

Step 2: Create a List of Cat Instances
Create a list called all_cats that contains instances of Bengal, Chartreux, and Siamese cats.
Example: all_cats = [bengal_obj, chartreux_obj, siamese_obj]
Give each cat a name and age.

Step 3: Create a Pets Instance
Create an instance of the Pets class called sara_pets, passing the all_cats list as an argument.

Step 4: Take Cats for a Walk
Call the walk() method on the sara_pets instance.
This should print the result of calling the walk() method on each cat in the list.
'''

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is walking gracefully."

class Siamese(Cat):
    def __init__(self, name, age, eye_color="blue"):
        super().__init__(name, age)
        self.eye_color = eye_color

    def describe(self):
        return f"{self.name} is a {self.age}-year-old Siamese cat with {self.eye_color} eyes."

class Bengal(Cat):
    pass

class Chartreux(Cat):
    pass

bengal_obj = Bengal("Tiger", 2)
chartreux_obj = Chartreux("Smokey", 5)
siamese_obj = Siamese("Luna", 3, eye_color="blue")

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

sara_pets = Pets(all_cats)
sara_pets.walk()

'''
Exercise 2: Dogs
Goal: Create a Dog class with methods for barking, running speed, and fighting.

Step 1: Create the Dog Class
Create a class called Dog with name, age, and weight attributes.
Implement a bark() method that returns “ is barking”.
Implement a run_speed() method that returns weight / age * 10.
Implement a fight(other_dog) method that returns a string indicating which dog won the fight, based on run_speed * weight.

Step 2: Create Dog Instances
Create three instances of the Dog class with different names, ages, and weights.

Step 3: Test Dog Methods
Call the bark(), run_speed(), and fight() methods on the dog instances to test their functionality.
'''

class Dog:
	def __init__ (self, name, age, weight):
		self.name = name
		self.age = age
		self.weight = weight

	def bark(self):
		return f"{self.name} is barking."

	def run_speed(self):
		return (self.weight / self.age) * 10

	def fight(self, other_dog):
		self_power = self.run_speed() * self.weight
		other_power = other_dog.run_speed() * other_dog.weight

		if self_power > other_power:
			return f"{self.name} wins the fight against {other_dog.name}!"
		elif self_power < other_power:
			return f"{other_dog.name} wins the fight against {self.name}!"
		else:
			return f"The fight between {self.name} and {other_dog.name} is tied!"

dog1 = Dog("Boomer", 12, 35)
dog2 = Dog("Zoomer", 5, 30)
dog3 = Dog("Loomer", 7, 25)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(f"{dog1.name}'s run speed: {dog1.run_speed()}")
print(f"{dog2.name}'s run speed: {dog2.run_speed()}")
print(f"{dog3.name}'s run speed: {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))

'''
Exercise 3: Dogs Domesticated

Step 1: Import the Dog Class
In a new Python file, import the Dog class from the previous exercise.

Step 2: Create the PetDog Class
Create a class called PetDog that inherits from the Dog class.
Add a trained attribute to the __init__ method, with a default value of False.
trained means that the dog is trained to do some tricks.
Implement a train() method that prints the output of bark() and sets trained to True.
Implement a play(*args) method that prints “ all play together”.
*args on this method is a list of dog instances.
Implement a do_a_trick() method that prints a random trick if trained is True.
Use this list for the ramdom tricks:
tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
Choose a rendom index from it each time the method is called.

Step 3: Test PetDog Methods
Create instances of the PetDog class and test the train(), play(*args), and do_a_trick() methods.
'''

# see files W3_D2_XP_dogclass.py and W3_D2_XP_dogsdomesticated.py

'''
Exercise 4: Family and Person Classes
Goal: Practice working with classes and object interactions by modeling a family and its members.

Step 1: Create the Person Class
Define a Person class with the following attributes:
first_name
age
last_name (string, should be initialized as an empty string)
Add a method called is_18():
It should return True if the person is 18 or older, otherwise False.

Step 2: Create the Family Class
Define a Family class with:
A last_name attribute
A members list that will store Person objects (should be initialized as an empty list)

Add a method called born(first_name, age):
It should create a new Person object with the given first name and age.
It should assign the family’s last name to the person.
It should add this new person to the members list.

Add a method called check_majority(first_name):
It should search the members list for a person with that first_name.
If the person exists, call their is_18() method.
If the person is over 18, print:
"You are over 18, your parents Jane and John accept that you will go out with your friends"
Otherwise, print:
"Sorry, you are not allowed to go out with your friends."

Add a method called family_presentation():
It should print the family’s last name.
Then, it should print each family member’s first name and age.
'''

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  # initialized as empty string

    def is_18(self):
        return self.age >= 18

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []  # list of Person objects

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No family member named {first_name} was found.")

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        for person in self.members:
            print(f"{person.first_name}, {person.age} years old")

# Create a family
my_family = Family("Smith")

# Add some members
my_family.born("Alice", 17)
my_family.born("Bob", 20)
my_family.born("Charlie", 15)

# Check majority status
my_family.check_majority("Bob")      # Over 18
my_family.check_majority("Alice")    # Not over 18
my_family.check_majority("Daisy")    # Not found

# Present the family
my_family.family_presentation()