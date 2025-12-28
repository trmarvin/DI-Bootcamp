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

from W3_D2_XP_dogclass import Dog

import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join([dog.name for dog in args] + [self.name])
        print(f"{dog_names} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}!")
        else:
            print(f"{self.name} isn't trained yet and refuses to do a trick.")

dog1 = PetDog("Boomer", 3, 20)
dog2 = PetDog("Zoomer", 4, 25)
dog3 = PetDog("Loomer", 2, 18)

dog1.train()

dog1.play(dog2, dog3)

dog1.do_a_trick()    
dog2.do_a_trick()
dog3.do_a_trick()