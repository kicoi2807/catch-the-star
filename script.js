const star = document.getElementById('star');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameArea = document.getElementById('game-area');

let score = 0;
let timeLeft = 30;

function moveStar() {
    const maxX = gameArea.clientWidth - star.clientWidth;
    const maxY = gameArea.clientHeight - star.clientHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    star.style.left = newX + 'px';
    star.style.top = newY + 'px';
}

star.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
    moveStar();
});

function startTimer() {
    const timer = setInterval(() => {
        timeLeft -= 1;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            star.style.display = 'none';
            alert(`Game Over! Your score: ${score}`);
            // Reset game
            score = 0;
            timeLeft = 30;
            scoreDisplay.textContent = `Score: ${score}`;
            timerDisplay.textContent = `Time: ${timeLeft}s`;
            star.style.display = 'block';
            moveStar();
        }
    }, 1000);
}

// Start the game
moveStar();
startTimer();