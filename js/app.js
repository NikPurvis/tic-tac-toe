let moveNumber = 0
let moveExOrOh = "X"
let gameOver = false
const resetButton = document.querySelector("#button")

const moves = []
const message = document.querySelector("#message")

const selectSquare = (event) => {
    // check to make sure click is in a game square
    markCheck = event.target.className
    if (markCheck === "playbox") {
        // acquire the id of the clicked square
        square = event.target.id
        // before we get started, check to see if the game is already over
        if (gameOver === true) {
            message.innerText = "Game over, press RESET to play again."
        } else {          
            if (moveNumber === 9) {
                message.innerText = "No moves left. It's a tie! Press RESET to play again."
                gameOver = true
            } else {
                // check to see if the move has already been made
                if (moves.includes(square) === true) {
                    message.innerText = "Someone already made that move, try again!"
                } else {
                    // valid play, so:
                    // 1. place the selected move with the correct symbol based on the move we're on         
                    const moveMarker = document.getElementById(square)
                    const moveText = document.createElement('p')
                    moveText.classList.add("xo")
                    moveText.innerText = moveExOrOh
                    moveMarker.appendChild(moveText)

                    // moveMarker.innerText = moveExOrOh
                    // 2. incrase the move count
                    moveNumber = moveNumber + 1
                    // 3. update the array with the new occupied square
                    moves.push(square)

                    //4. start checking for wins at move 5
 //                   if (moveNumber >= 5 && moveNumber <= 9) {
                        // win condition 1: topLeft, topCenter, topRight (div id topRow)
                        // win condition 2: centerLeft, centerCenter,centerRight (div id centerRow)
                        // win condition 3: bottomLeft, bottemCenter, bottomRight (div id bottomRow)
                        // win condition 4: topLeft, centerLeft, bottomLeft
                        // win condition 5: topCenter, centerCenter, bottomCenter
                        // win condition 6. topRight, centerRight, bottomRight
                        // win condition 7: topRight, centerCenter, bottomLeft
                        // win condition 8: topLeft, centerCenter, bottomRight
                        // Xs are odd plays, Os are even plays, can pull who played what from ordered list in moves array
 //                   }

                    // 5. display message if we're out of moves
                    if (moveNumber === 9) {
                        message.innerText = "That was the last move. It's a tie!"
                        gameOver = true
                    } else {
                        // 6. switch to X or O for the next turn
                        if (moveExOrOh === "X") {
                            moveExOrOh = "O"
                            message.innerText = `${moveExOrOh}, you're up!`
                        } else {
                            moveExOrOh = "X"
                            message.innerText = `${moveExOrOh}, it's your turn!`
                        }
                    }
                }
            }
        }
    }
}
const clearBoard = () => {    
    message.innerText = "Board reset for new game."
    moves.length = 0
    moveNumber = 0
    moveExOrOh = "X"
    gameOver = false
    // This is definitely not the way to do this.
    let clearBox = document.querySelector("#topLeft")  
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#topCenter")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#topRight")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#centerLeft")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#centerCenter")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#centerRight")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#bottomLeft")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#bottomCenter")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
    clearBox = document.querySelector("#bottomRight")
    while (clearBox.firstChild) {
        clearBox.removeChild(clearBox.firstChild)
    }
}




// ** Requirements **
// ✓ A user should be able to click on different squares to make a move.
// ✓ Every click will alternate between marking an X and O
// ✓ Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// ✓ A cell should not be able to be replayed once marked.
// ✓ You should not be able to click remaining empty cells after the game is over.
// ==> Add a reset button that will clear the contents of the board.
// ✓ Display a message to indicate which turn is about to be played.
// ✓ Detect draw conditions (ties/cat's game)
// ==> Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
//   -- insert who made the move into array?
// ✓ me, option: clicking outside the grid doesn't add to array?

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", selectSquare)
    resetButton.addEventListener("click", clearBoard)
})