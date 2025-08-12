class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file, 'r', encoding='utf-8') as f:
            self.words = [line for line in f]

# check if the given word (ie. the word of the user) is a valid word.
    def is_valid_word(self, word):
        return word in self.words
    
    print("is_valid_word:", self.is_valid_word(word))

# find all anagrams for the given word
    def get_anagrams(self, word):
        if not self.is_valid_word(word):
            return []
    
        return [w for w in self.words if self.is_anagram(w, word)]

# create a separate method called is_anagram(word1, word2), 
# that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)
