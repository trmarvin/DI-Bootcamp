
'''
The goal is to create a class that represents a simple circle.
A Circle can be defined by either specifying the radius or the diameter.
The user can query the circle for either its radius or diameter.

Other abilities of a Circle instance:

- Compute the circle’s area
- Print the attributes of the circle - use a dunder method
- Be able to add two circles together, and return a new circle with the new radius - use a dunder method
- Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
- Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
- Be able to put them in a list and sort them

Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles
'''

import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}, diameter: {self.diameter:.2f}, area: {self.area:.2f}"

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __gt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius > other.radius

c1 = Circle(radius=3)
c2 = Circle(diameter=10)

print(c1)           # Circle with radius: 3.00, diameter: 6.00, area: 28.27
print(c2)           # Circle with radius: 5.00, diameter: 10.00, area: 78.54

# Add two circles
c3 = c1 + c2
print(c3)           # Circle with radius: 8.00...

# Compare circles
print(c1 == c2)     # False
print(c1 < c2)      # True
print(c2 > c1)      # True

# Sorting
circles = [c2, c3, c1]
circles.sort()
for c in circles:
    print(c.radius)
# Output: 3.0, 5.0, 8.0
