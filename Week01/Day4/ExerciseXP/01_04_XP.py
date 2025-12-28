# Exercise 1: Favorite Numbers

my_fav_numbers = {3, 7, 13, 29, 34}

my_fav_numbers.add(40)
my_fav_numbers.add(46)

my_fav_numbers.remove(46)

friend_fav_numbers = {2, 6, 12, 21}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)

# Exercise 2: Tuple

tuple1 = (29, 34, 40, 46)
tuple_added = (50, 75)
updated_tuple = tuple1 + tuple_added

print(updated_tuple)

# Exercise 3: List Manipulation

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

apple_count = basket.count("Apples")
print(apple_count)

print(basket)

basket.clear()

# Exercise 4: FLoats

# This created the numbers but not in a list:
# for i in range(3, 11): 
    # number = i / 2.0 
    # print(number)

list = []
start = 1.5
end = 5.0
step = 0.5

while start <= end:
    # Convert to int if it's a whole number
    if start.is_integer():
        list.append(int(start))
    else:
        list.append(start)
    start += step

print(list)

# Exercise 5: For Loop

for i in range(1, 21):
	print(i)

numbers = range(1, 21)

for index in range(len(numbers)):
    if index % 2 == 0:
        print(numbers[index])

# Exercise 6: While Loop

while True:
    name = input("Please enter your name: ")
    if name == "Tamar":
        break

# Exercise 7: Favorite Fruits

fav_fruits = input("Enter your favorite fruits, separated by spaces: ")
favorite_fruits = fav_fruits.split()

some_fruit = input("Enter the name of any fruit.")

if some_fruit in favorite_fruits:
	print("You chose one of your favorite fruits! Enjoy!")
else:
	print("You chose a new fruit. I hope you enjoy it!")

# Exercise 8: Pizza Toppings

toppings = []
price_per_topping = 2.50
base_price = 10.00

while True:
    topping = input("Enter a pizza topping (or type 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    print(f"Adding {topping} to your pizza.")
    toppings.append(topping)

total_price = base_price + price_per_topping * len(toppings)

print("\nYour pizza has the following toppings:")
for t in toppings:
    print(f"- {t}")

print(f"\nTotal cost: ${total_price:.2f}")

# Exercise 9: Cinemax Tickets

total_cost = 0

while True:
    age_input = input("Welcome to Cinemax! To purchase a ticket, enter the moveigoer's age (or type 'done' to finish): ")
    if age_input.lower() == 'done':
        break

    age = int(age_input)

    if age < 3:
        cost = 0
    elif age <= 12:
        cost = 10
    else:
        cost = 15

    total_cost += cost

print(f"\nTotal ticket cost for group: ${total_cost}")

# Exercise 10: Sandwich Orders

finished_sandwiches = []

sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]

print("Sorry, we're out of Pastrami!\n")
while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")

print("Updated sandwich orders:", sandwich_orders)

for sandwich in sandwich_orders:
    print(f"I made your {sandwich} sandwich.")
    finished_sandwiches.append(sandwich)

print("\nAll finished sandwiches:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")