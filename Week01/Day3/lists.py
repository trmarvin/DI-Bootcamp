user_name = "tamar"
email = "trmarvin@gmail.com"
user_age = 47
is_online = True

# square brackets indicate a List

user_info = [user_name, email, user_age, is_online]
print(len(user_info))

# create a list with a function:

some_list = list("item 1")
other_list = ["item 1"]

print(some_list)
print(other_list)

empty_list = []

# ordered means can be accessed byindex
print(user_info[2])

# slice
fruits = ["orange", "kiwi", "apple", "lime"]
print(fruits[-2:])

fruits[1] = "pineapple"
print(fruits)

# my_name = "Juliana"
# my_name[-1] = "e" #typreError: not possible to change an item on a string' strings ar eimmutable

#list methods

fruits = ["orange", "kiwi", "apple", "lime"]
fruits.insert(1, "mango")
print(fruits)

fruits.remove("kiwi") # removez the first appearance
print(fruits)

fruits.append("watermelon")
print(fruits)

fruits.pop() # without argument deletes last item
print(fruits)

fruits.pop(1)
print(fruits)

vegetables = ["tomato", "potato", "carrot"]
colors = ["red", "blue", "green"]

fruits.extend(vegetables)
print(fruits)

# sorted() and .sort
fruits_sorted = sorted(fruits) # creates new list
print(fruits)
print(fruits_sorted)

fruits.sort() # sorts same list without creating new one
print(fruits)

list1 = [5, 10, 15, 20, 25, 50, 20]

if 20 in list1:
	index_20 = list1.index(20)
	list1[index_20] = 200
print(list1)

