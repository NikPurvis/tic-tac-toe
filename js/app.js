
const selectBox0 = document.getElementById("box0")
const selectBox1 = document.getElementById("box1")
const selectBox2 = document.getElementById("box2")
const selectBox3 = document.getElementById("box3")
const selectBox4 = document.getElementById("box4")
const selectBox5 = document.getElementById("box5")
const selectBox6 = document.getElementById("box6")
const selectBox7 = document.getElementById("box7")
const selectBox8 = document.getElementById("box8")
const allBoxes = document.getElementsByClassName("grid-box")
const selectRows = document.getElementsByClassName("grid-row")
const boxText = document.getElementsByClassName("move")
const resetButton = document.getElementById("reset")
const message = document.getElementById("message")

let moveNumber = 0
let moveExOrOh = "X"
let gameOver = false
let gameMoves = []


// Objectives
// Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
// Use best practices when writing code
// This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM.
//
// We will be making a Tic Tac Toe game using all of these concepts.
//
// Getting Started
// ✔ Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using id and/or class on clickable elements will help you wire this up in JavaScript afterwards.
//
// The JavaScript portion will be next
// ✔ Select elements and attach functions via event listeners
// ✔ You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an X or an O
// Requirements
// ✔ A user should be able to click on different squares to make a move.
// ✔ Every click will alternate between marking an X and O
// ✔ Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// ✔ A cell should not be able to be replayed once marked.
// *** You should not be able to click remaining empty cells after the game is over.
// ✔ Add a reset button that will clear the contents of the board.
// ✔ Display a message to indicate which turn is about to be played.
// ✔ Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
// Have Fun - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.
//
// Bonuses
// ✔ Implement your reset button without refreshing the whole page
// Track player's wins over time
// Add a simple AI to support one player vs computer mode. In this case, "simple" just means having the computer pick a random empty square.
// Make your computer seem more human by adding a short time delay between your turn and the computer's turn.
// Style it up! Get creative, or even make a theme!
// Super Duper Bonus
// Add an AI that can beat you every time with the mini-max algorithm.


// function to switch the next move to X or O depending on what was
// last used, display a message to the user about whose turn it is,
// track the number of moves, and stop the game if there are no more.
const nextMove = () => {
        checkWinner()
        moveNumber = moveNumber + 1
        console.log("that was move#", moveNumber)
        if (moveNumber === 9) {
            gameOver = true
            message.innerText = "No more moves. It's a tie! Hit RESET GAME to play again."
            } else {
            if (moveExOrOh === "X") {
                moveExOrOh = "O"
                if (gameOver === false) {
                    message.innerText = "O, it's your turn!"
                }
            } else {
                moveExOrOh = "X"
                if (gameOver === false) {
                    message.innerText = "X, you're up!"
                }
            } 
       }
    }

// function accepting the ID of the box selected when called and
// returning true if the box is filled and false if it's free
const filledSquare = (box) => {
    if (boxText[box].innerText) {
        message.innerText = "Someone's already moved there"
        return true
    } else {
        return false
    }
}

// Function to check for a winner after each move. If conditions are
// met, it will announce the winner to the user and stop the game,
// preventing any further moves except resetting the board.
// Again, there must be a cleaner, quicker way of doing this, but it
// works!
const checkWinner = () => {
    if ((boxText[0].innerText === "X"
        && boxText[1].innerText === "X"
        && boxText[2].innerText === "X")
        || (boxText[0].innerText === "X"
        && boxText[3].innerText === "X"
        && boxText[6].innerText === "X")
        || (boxText[0].innerText === "X"
        && boxText[4].innerText === "X"
        && boxText[8].innerText === "X")
        || (boxText[1].innerText === "X"
        && boxText[4].innerText === "X"
        && boxText[7].innerText === "X")
        || (boxText[2].innerText === "X"
        && boxText[5].innerText === "X"
        && boxText[8].innerText === "X")
        || (boxText[3].innerText === "X"
        && boxText[4].innerText === "X"
        && boxText[5].innerText === "X")
        || (boxText[6].innerText === "X"
        && boxText[7].innerText === "X"
        && boxText[8].innerText === "X")
        || (boxText[2].innerText === "X"
        && boxText[4].innerText === "X"
        && boxText[6].innerText === "X")
        ) {
            message.innerText = "Congratulations X, you won!"
            console.log("x won!")
            gameOver = true
        } else if (
        (boxText[0].innerText === "O"
        && boxText[1].innerText === "O"
        && boxText[2].innerText === "O")
        || (boxText[0].innerText === "O"
        && boxText[3].innerText === "O"
        && boxText[6].innerText === "O")
        || (boxText[0].innerText === "O"
        && boxText[4].innerText === "O"
        && boxText[8].innerText === "O")
        || (boxText[1].innerText === "O"
        && boxText[4].innerText === "O"
        && boxText[7].innerText === "O")
        || (boxText[2].innerText === "O"
        && boxText[5].innerText === "O"
        && boxText[8].innerText === "O")
        || (boxText[3].innerText === "O"
        && boxText[4].innerText === "O"
        && boxText[5].innerText === "O")
        || (boxText[6].innerText === "O"
        && boxText[7].innerText === "O"
        && boxText[8].innerText === "O")
        || (boxText[2].innerText === "O"
        && boxText[4].innerText === "O"
        && boxText[6].innerText === "O")
        ) {
            message.innerText = "Let's hear it for our big winner, O!"
            console.log("o won!")
            gameOver = true
        }
}

// Each box has its own event listener and corresponding identifier
// which then drives the other actions of the game.
// This is the exact opposite of DRY, this is absolutely sodden and
// dripping wet, but it WORKS, so it's what I'm going with for now.
// I think an array (or object? probably object) holding square
// information would work great. Could include position on the board,
// if it's taken, X or O, etc.
const click0 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(0) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[0].innerText = moveExOrOh
            nextMove()            
        }
    }
}
const click1 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(1) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[1].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click2 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(2) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[2].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click3 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(3) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[3].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click4 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(4) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[4].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click5 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(5) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[5].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click6 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(6) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[6].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click7 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(7) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[7].innerText = moveExOrOh
            nextMove()
        }
    }
}
const click8 = () => {
    if (gameOver === true) {
        message.innerText = "The game's over! Press RESET GAME to play again."
    } else {
        if (filledSquare(8) === true) {
            message.innerText = "Someone's already moved there"
        } else {
            boxText[8].innerText = moveExOrOh
            nextMove()
        }
    }
}

// Function called when the reset button is clicked to clear all the
// squares, reset moves and game over condition, and display a message
// to the user.
const clearSquares = () => {
    for (let i = 0; i < 9; i++) {
        boxText[i].innerText = ""
        message.innerText = "The board has been reset"
        gameOver = false
        moveExOrOh = "X"
        moveNumber = 0
    }
}

// I think looking further at addEventListener would streamline this.
// The key, I think, is being able to pass and receive the box number
// as a variable that I can just plug into functions, but I can't seem
// to get that to work so going to long and messy but functional path.
document.addEventListener('DOMContentLoaded', () => {
    resetButton.addEventListener("click", clearSquares)
    selectBox0.addEventListener("click", click0)
    selectBox1.addEventListener("click", click1)
    selectBox2.addEventListener("click", click2)
    selectBox3.addEventListener("click", click3)
    selectBox4.addEventListener("click", click4)
    selectBox5.addEventListener("click", click5)
    selectBox6.addEventListener("click", click6)
    selectBox7.addEventListener("click", click7)
    selectBox8.addEventListener("click", click8)
})