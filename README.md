**My Wordle Game**
The classic Wordle Game remade by SokaNanD.
---
**General Features**
Guess a 5-letter word randomly chosen from a huge database
Get 6 attempts to guess the word
After each guess, the color of the letters will change to give hints
-Green: The letter is in the word and in the correct position
-Yellow: The letter is in the word but in the incorrect position
-Grey: The letter is not in the word
---
The main functionality of the game is as follows:
-The grid is made using 2 for loops that add the divs automatically
-The input is made automatic rather than a text input using the DOM eventlistener
-Win streaks stored using localStorage
-Words taken randomly from this dataset: https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93
---
**My Learnings**
Adding HTML elements using JavaScript
Direct Input from Keypresses rather than TextInput
Relative widths and placing in grid using css
Working with localStorage of simple websites
---
**Current Problems**
One problem that I was unable to fix was to find a way to read the local valid-wordle-words.txt file in js. I tried using fs but was unable to use require hence i used fetch with the vscode live server. Still finding ways to solve the issue.
---
**Demo Video Link**
https://drive.google.com/file/d/12uNXAR-Mwq1wZH8RnkH1_675WQ535NoP/view?usp=sharing
---
Made by SokaNanD with Fun.
