# tuples are different from lists because tuples can't be changed

my_tuple = ()
print(type(my_tuple))

nums = [1,2,34,5,67]
nums_tuple = tuple(nums)
print(nums_tuple)

#tuple methods
cities = ("NY", "BO", "SP", "RJ", "NY")

print(cities.count("NY"))

# we can use index
print(cities[1])
print(cities.index("SP"))

# *cities.append("RU) - this will return an error
# *cities[1] = "RJ" - this will return an error

# unpacking
languages = ("EN", "RU", "JP", "HE")

lang1, lang2, lang3, lang4 = languages
print(lang1)
print(lang2)
print(lang3)
print(lang4)

# sets
# cannot have duplicated values and are unordered

some_set=(set)

#set methods

countries = {"Israel", "US", "Brazil"}
names = {"Shimon", "Israel", "David"}

set_3 = countries.intersection(names)
print(set_3)

merged_set = countries.union(names)
print(merged_set)

# if you did the same intersection with lists, Israel would appear twice, not once.

dif_set = countries.difference(names)
print(dif_set)

dif_set = names.difference(countries)
print(dif_set)