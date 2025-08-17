# Review OOP - Inheritance

# OOP - Object Orientaed Programming
# Class - define main attributes of the object. It is like a blueprint.
# Object - an instance of a class. It has attributes and methods (functions).
# Inheritance - the attributes and methods can be inherited from a parent class to a child class.

class Book:
    def __init__(self, title, author, publication_date, price):
        self.title = title
        self.author = author
        self.publication_date = publication_date
        self.price = price
    
    def present(self):
        print(f"Title: {self.title}\nAuthor: {self.author}")

class Fiction(Book):
    def __init__(self, title, author, publication_date, price, is_awesome):
        super().__init__(title, author, publication_date, price)
        self.genre = "Fiction"
        self.is_awesome = is_awesome

    def present(self):
        super().present()  # Call the present method of the parent class
        if self.is_awesome:
            print(f"genre: {self.genre}\nis awesome? {self.is_awesome}")
        else:
            print("This books isn't worth the read")

book1 = Book("1984", "George Orwell", "1948", 100)
book1.present()
Book.present(book1) # this is the same as book1.present()
print(book1.author)

book2 = Fiction("Contact", "Carl Sagan", 1995, 150, True)
book2.present()

book3 = Fiction("Fifty Shades of Grey", "E.L. James", 2011, 5, False)
book3.present()