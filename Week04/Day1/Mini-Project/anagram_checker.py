class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file, 'r', encoding='utf-8') as f:
            self.words = [line.strip() for line in f]

    def is_valid_word(self, word):
        word = word.lower().strip()
        return word in (w.lower() for w in self.words)

    def is_anagram(self, word1, word2):
        w1, w2 = word1.lower().strip(), word2.lower().strip()
        return w1 != w2 and sorted(w1) == sorted(w2)

    def get_anagrams(self, word):
        if not self.is_valid_word(word):
            return []
        return [w for w in self.words if self.is_anagram(w, word)]
