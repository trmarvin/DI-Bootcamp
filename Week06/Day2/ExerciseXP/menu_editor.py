from menu_item import MenuItem
from menu_manager import MenuManager

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("No items found.")
        return
    print("\nRestaurant Menu:")
    for it in items:
        print(f"- {it.name} - ${it.price}")
    print()

def add_item_to_menu():
    name = input("Enter the name of the item to add: ").strip()
    price_str = input("Enter the price of the item to add (whole number): ").strip()
    try:
        price = int(float(price_str))
    except ValueError:
        print("Invalid price.")
        return
    item = MenuItem(name, price)
    new_id = item.save()
    print(f"Item added successfully (id={new_id}).")

def remove_item_from_menu():
    name = input("Enter the name of the item to delete: ").strip()
    item = MenuManager.get_by_name(name)
    if not item:
        print("Item not found.")
        return
    item.delete()
    print("Item deleted successfully.")

def update_item_from_menu():
    current_name = input("Enter the current name of the item: ").strip()
    item = MenuManager.get_by_name(current_name)
    if not item:
        print("Item not found.")
        return

    new_name = input("Enter the new name: ").strip()
    new_price_str = input("Enter the new price (whole number): ").strip()
    try:
        new_price = int(float(new_price_str))
    except ValueError:
        print("Invalid price.")
        return

    item.update(new_name, new_price)
    print("Item updated successfully.")

def view_item():
    name = input("Enter the name of the item to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item found: {item.name} - ${item.price}")
    else:
        print("Item not found.")

def show_user_menu():
    print("\n--- Program Menu ---")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Restaurant Menu")
    print("Q - Exit")

    choice = input("Enter your choice: ").strip().upper()

    if choice == "V":
        view_item()
        return True
    elif choice == "A":
        add_item_to_menu()
        return True
    elif choice == "D":
        remove_item_from_menu()
        return True
    elif choice == "U":
        update_item_from_menu()
        return True
    elif choice == "S":
        show_restaurant_menu()
        return True
    elif choice == "Q":
        # On exit, show the restaurant menu then quit
        print("\nFinal Restaurant Menu:")
        show_restaurant_menu()
        print("Goodbye!")
        return False
    else:
        print("Invalid choice. Please try again.")
        return True

def main():
    # keep showing the menu until the user selects Q
    while show_user_menu():
        pass

if __name__ == "__main__":
    main()

# The first way I did it:

# from menu_item import MenuItem
# from menu_manager import MenuManager

# import psycopg2

# conn = psycopg2.connect(
#     dbname="restaurant",
#     user="postgres",
#     password="07Nathan30!",
#     host="localhost",
#     port=5432
# )

# def show_user_menu():
#     print("V - View an item")
#     print("A - Add an item")
#     print("D - Delete an item")
#     print("U - Update an item")
#     print("S - Show the Menu")
#     print("Q - Exit")

#     choice = input("Enter your choice: ").strip().upper()
#     if choice == "V":
#         item_name = input("Enter the name of the item to view: ").strip()
#         item = MenuManager.get_by_name(item_name)
#         if item:
#             print(f"Item found: {item.name} - ${item.price}")
#         else:
#             print("Item not found.")
#     elif choice == "A":
#         item_name = input("Enter the name of the item to add: ").strip()
#         item_price = input("Enter the price of the item to add: ").strip()
#         price = int(float(item_price))  # or just int(...) if you only accept whole numbers
#         item = MenuItem(item_name, price)
#         new_id = item.save()
#         print(f"Item added successfully (id={new_id}).")
#     elif choice == "D":
#         item_name = input("Enter the name of the item to delete: ").strip()
#         MenuItem.delete(item_name)
#         print("Item deleted successfully.")
#     elif choice == "U":
#         item_name = input("Enter the name of the item to update: ").strip()
#         item = MenuManager.get_by_name(item_name)  
#         if item:
#             new_name = input("Enter the new name of the item: ").strip()
#             new_price = input("Enter the new price of the item: ").strip()
#             new_price_val = int(float(new_price))  
#             item.update(new_name, new_price_val)
#             print("Item updated successfully.")
#         else:
#             print("Item not found.")
#     elif choice == "S": 
#         all_items = MenuManager.all_items()
#         if all_items:
#             print("Menu Items:")
#             for item in all_items:
#                 print(f"{item['name']} - ${item['price']}")
#         else:
#             print("No items found.")

# show_user_menu()