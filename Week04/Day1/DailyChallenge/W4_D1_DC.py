# Part 1 : Quizz :
# Answer the following questions

# What is a class? 
# A class is a blueprint or template in Python that defines the attributes (data) and methods (functions) that the objects created from it will have.

# What is an instance?
# An instance is a specific object created from a class. Each instance has its own unique data but shares the class’s structure and behavior.

# What is encapsulation?
# Encapsulation is the concept of wrapping data (attributes) and methods (functions) into a single unit, or class.

# What is abstraction?
# Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. 

# What is inheritance?
# Inheritance is a mechanism in Python that allows a new class (child class) to inherit the attributes and methods of an existing class (parent class). This promotes code reusability and establishes a relationship between the parent and child classes.

# What is multiple inheritance?
# Multiple inheritance is a feature in Python where a class can inherit from more than one parent class. 
# This allows the child class to access attributes and methods from all parent classes.

# What is polymorphism?
# Polymorphism is the ability of different objects to respond to the same method call in their own way.
# It allows for flexibility and the use of a unified interface for different data types.

# What is method resolution order or MRO?
# Method Resolution Order (MRO) is the order in which Python looks for a method in a hierarchy of classes.

# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

    def __repr__(self):
        return f"Card('{self.suit}', '{self.value}')"

# card1 = Card("Hearts", "A")
# card2 = Card("Spades", "10")
# print(card1)  # Output: A of Hearts
# print(card2)  # Output: 10 of Spades


# The Deck class:
class Deck:
    def __init__(self):
        self.cards = [Card(suit, value) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                      for value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]]

# - should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)

# - should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
    def deal(self):
        if self.cards:
            return self.cards.pop()
        return None
        
# - should have a method called reset which resets the deck to its original state with all 52 cards.
    def reset(self):
        self.cards = [Card(suit, value) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                      for value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]]

if __name__ == "__main__":
    deck = Deck()
    deck.shuffle()
    print(f"Cards before dealing: {len(deck.cards)}")
    
    card = deck.deal()
    print(f"Dealt card: {card}")
    print(f"Cards remaining: {len(deck.cards)}")
    
    deck.reset()
    print(f"Deck reset. Cards now: {len(deck.cards)}")