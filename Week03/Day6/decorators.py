# Decorators
# @classmethod is a method designed for the class

import math

class Circle:
    def __init__(self, radius=0, diameter=0):
        # if radius == 0:
        #     self.radius = diameter
        self.radius = radius
        self.diameter = diameter
        self.color = None

    @classmethod
    def from_diameter(cls, diameter):
        diameter = diameter
        radius = round(diameter / 2)
        return cls(radius, diameter)
    
    @staticmethod
    def area_from_radius(radius):
        # pi = math.pi
        return math.pi * (radius ** 2)
    
    @property
    def color(self, color):
        self._color = color
        return self

    @property
    def color(self):
        return self
    
    @color.setter
    def color(self, color):
        self._color = color
        return self

circle1 = Circle(5, 10)
print(circle1.radius)
print(circle1.diameter)

# circle2 = Circle(diameter = 10)
circle2 = Circle.from_diameter(10)
circle2.color = "red"
print(circle2.color)
print(circle2.radius)
print(circle2.diameter)
print(circle2.area_from_radius(circle2.radius))