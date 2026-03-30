
let word_grid = document.getElementById("word-grid")
let error = document.getElementById("error-text")
let winStreakh3 = document.getElementById("wstreak")
let retrybtn = document.getElementById("retry-btn")

let word_array = []


winStreakh3.innerText = "Win Streak: " + getStreak()


for (let i = 0; i < 6; i++) {
    let div_i = document.createElement("div")
    div_i.classList.add('word')
    let arr = []
    for (let j = 0; j < 5; j++) {
        let w_j = document.createElement("div")
        w_j.classList.add("letter")
        arr.push(w_j)
        word_grid.appendChild(w_j)
    }
    word_array.push(arr)
    // word_grid.appendChild(div_i)
}
// console.log(word_array)

// const fs = require('fs')
// const words = fs.readFileSync("valid-wordle-words.txt", 'utf-8')
let words = "";
let word = "PLANK"
fetch("./valid-wordle-words.txt").then(res => res.text().then(data => {
    words = data.split("\n")
    word = words[Math.floor(Math.random() * words.length)].toUpperCase()
}))
let n = 1
let guess = ""
let letter_arr = word_array[n - 1]
let letter_count = 0
let gameOn = true;
document.addEventListener('keydown', function (event) {
    if (!gameOn) {
        return;
    }

    let key = event.key.toUpperCase();
    console.log(key)
    if (key.length == 1 && key.toLowerCase() !== key) {
        if (letter_count < 5) {
            letter_arr[letter_count].innerText = key;
            letter_count++;
            guess += key
            error.innerText = guess
        }
    } else if (key == "BACKSPACE") {
        if (letter_count > 0) {
            letter_arr[letter_count - 1].innerText = "";
            letter_count--;
            guess = guess.slice(0, -1)
            error.innerText = guess
        }
    } else if (key == "ENTER") {
        let valid_word = words.includes(guess.toLowerCase())
        console.log(words, valid_word)
        if (letter_count == 5 && valid_word) {

            error.innerText = "Good Guess!"
            check_word(guess, letter_arr)
            guess = ""
            letter_count = 0
            n++;
            letter_arr = word_array[n - 1]
        } else {
            error.innerText = "Please enter a valid word!"
        }

        if (n > 6) {
            gameOn = false;
            localStorage.setItem("WinStreak", 0)
            endGame(false)
        }
    }
    // console.log("lc  " + n)
})

function getStreak() {
    let a = localStorage.getItem("WinStreak")
    if (a) {
        return a;
    } else {
        return 0;
    }
}

function check_word(guess, letter_arr) {
    console.log(guess, word, letter_arr)
    for (let i = 0; i < 5; i++) {
        if (guess[i] == word[i]) {
            letter_arr[i].style.backgroundColor = "#6aaa64";
        } else if (word.includes(guess[i])) {
            letter_arr[i].style.backgroundColor = "#c9b458";
        } else {
            letter_arr[i].style.backgroundColor = "#787c7e";
        }
    }

    if (guess == word) {
        localStorage.setItem("WinStreak", parseInt(getStreak()) + 1)
        gameOn = false;
        endGame(true)
    }
}

function endGame(win) {
    error.innerText = win ? "Congratulations! You guessed the word!" : "Game Over! The word was " + word + "!";
    winStreakh3.innerText = "Win Streak: " + getStreak()

    retrybtn.innerText = "Play Again"
    retrybtn.style.visibility = "visible";
}

function restart() {
    document.location.reload()
}