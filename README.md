# Password-Generator-Web-App
This is a password generator I made to practice the basics of javascript, and making responsive layouts with css. With this password generator you can choose from one of seven different options for the password generation, to tell it what you want in your password (such as symbols, letters, and characters) and then you can select/increment the length you want your password to be,and then finally hit generate and you will instantly have a completely randomized password that is based off of what you wanted! You are also able to save any password you like, and once you are done generating and saving the password(s) you can download a .txt file that already has them saved inside of it. I also built a rough prototype of a password strength indicator, that checks for the length, number of unique characters, and number of duplicate characters and gives it a strength rating between weak to very strong. With the randomization, the generator generates a random number for each character, and uses that number to index a random character from whichever array is being targeted (depending on which option the user selects) and then puts all of these indexed characters together into a string to form the password that has been generated for the user. Before the process of indexing from these arrays occurs, an algorithim (the fisher-yates shuffle) shuffles the arrays to add another layer of randomization to the password generation. Overall, I used the experience of making this to teach myself more about the basics of Javascript, because although I have plenty of experience with languages such as python and C++, I have only recently started to learn the web development side of programming/computer science, this project taught me about how regex works/how to utilize it for my use case, how functions in Javascript work/how similar they are to functions in other languages, and incorporating for loops, while loops, if/else branches, the fisher-yates algorithim, and switch cases to make a web app where all of the parts have a single responsibility, and are working together to achieve a common goal.
