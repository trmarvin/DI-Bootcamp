class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file, 'r', encoding='utf-8') as f:
            self.words = [line for line in f]
