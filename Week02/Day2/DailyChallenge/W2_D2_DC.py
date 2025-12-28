import re

MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

# Step 1: Convert to 2D list
rows = MATRIX_STR.strip().split('\n')
matrix = [list(row) for row in rows]

# Step 2: Read column by column
cols = len(matrix[0])
rows_count = len(matrix)

raw_message = ''
for col in range(cols):
    for row in range(rows_count):
        raw_message += matrix[row][col]

# Step 3: Replace non-letter groups between letters with space
# I could not do this step without help from AI
cleaned = re.sub(r'(?<=[A-Za-z])[^A-Za-z]+(?=[A-Za-z])', ' ', raw_message)

# Step 4: Remove any leftover non-letter characters
final_message = re.sub(r'[^A-Za-z ]+', '', cleaned)

# Step 5: Print result
print(final_message)