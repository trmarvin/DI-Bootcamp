import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

# Copy this code, and create a program that finds, 
# within list_of_numbers all the pairs of number that sum to the target number

def find_pairs(nums, target):
    seen = set()
    pairs = set()

    for num in nums:
        complement = target - num
        if complement in seen:
            pair = tuple(sorted((num, complement)))
            pairs.add(pair)
        seen.add(num)

    return pairs

result = find_pairs(list_of_numbers, target_number)

print(f"Pairs that sum to {target_number}:")
for pair in result:
    print(pair)
