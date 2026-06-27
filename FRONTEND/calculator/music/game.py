import random

words = ["apple", "python", "laptop", "mouse", "chair"]

word = random.choice(words)
guessed_letters = []
wrong_guesses = 0
max_wrong = 6

print("Welcome to Hangman Game!")

while wrong_guesses < max_wrong:
    display_word = ""

    for letter in word:
        if letter in guessed_letters:
            display_word += letter + " "
        else:
            display_word += "_ "

    print("\nWord:", display_word)

    if "_" not in display_word:
        print("🎉 You Won!")
        break

    guess = input("Enter a letter: ").lower()

    if guess in guessed_letters:
        print("Already guessed!")
        continue

    guessed_letters.append(guess)

    if guess not in word:
        wrong_guesses += 1
        print("❌ Wrong Guess!")
        print("Remaining chances:", max_wrong - wrong_guesses)

else:
    print("💀 You Lost!")
    print("The word was:", word)