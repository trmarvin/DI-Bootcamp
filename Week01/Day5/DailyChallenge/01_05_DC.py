'''
In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some 
fixed number of positions down the alphabet.

For example, with a left shift of 3 –> D would be replaced by A,
–> E would become B, and so on.

The method is named after Julius Caesar, who used it in his private correspondence.

Create a python program that encrypts and decrypts messages with ceasar cypher.
The user enters the program, and then the program asks him if he wants to encrypt or decrypt, 
and then execute encryption/decryption on a given message and a given shift.
'''

# encryption function

def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

 # decryption function

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)

# main program

def main():
    print("Welcome to the Caesar Cipher program!")
    
    while True:
        choice = input("Do you want to (E)ncrypt or (D)ecrypt a message? (E/D): ").strip().upper()
        if choice not in ['E', 'D']:
            print("Invalid choice. Please enter 'E' or 'D'.")
            continue

        message = input("Enter your message: ")
        
        try:
            shift = int(input("Enter the shift value (e.g. 3): "))
        except ValueError:
            print("Shift must be a number.")
            continue

        if choice == 'E':
            encrypted = caesar_encrypt(message, shift)
            print("Encrypted message:", encrypted)
        else:
            decrypted = caesar_decrypt(message, shift)
            print("Decrypted message:", decrypted)

        again = input("Do you want to run the program again? (Y/N): ").strip().upper()
        if again != 'Y':
            print("Goodbye!")
            break

if __name__ == "__main__":
	main()
