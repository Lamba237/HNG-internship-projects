// Initialize a random 6 color array
const colors = ["palegreen", "orange", "purple", "cyan", "aqua", "black"];
let targetColor;

//Initialize score to zero
let score = 0;

const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOption = document.getElementById('colorOptions');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreDisplay = document.querySelector('[data-testid="score"]');
const gameButton = document.querySelector('[data-testid="newGameButton"]');

// This function starts a new game
function startGame() {

    // It will randomly select target color
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;

    // This will clear previous button
    colorOption.innerHTML = '';

    // Creating color buttons
    const shuffleColors = shuffleArray([...colors]);
    shuffleColors.forEach(color => {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.setAttribute('data-testid', 'colorOption');
        button.addEventListener('click', () => checkGuess(color));
        colorOption.appendChild(button);
    });

    gameStatus.textContent = '';
}

// This function actually checks the players guess
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = 'Correct! 🎉';
        gameStatus.style.color = 'green';
        score++;
        scoreDisplay.textContent = score;
        setTimeout(startGame, 1000); // After 1 second, start a new round
    } else {
        gameStatus.textContent = 'Wrong! Try again. 😥';
        gameStatus.style.color = 'red';
    }
}

// Function to shuffle an Array

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        array[i], array[j] = array[j], array[i];
    }
    return array;
}

// New game Button event listener
gameButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
});

// Start the game
startGame();