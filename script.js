const canvas = document.getElementById('shapeCanvas');
const ctx = canvas.getContext('2d');
const shapes = ['circle', 'square', 'triangle', 'rectangle', 'pentagon'];
let currentShape = '';
let score = 0;

function drawShape(shape) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const difficulty = document.getElementById('difficulty').value;
    let blurValue;

    switch (difficulty) {
        case 'easy':
            blurValue = '5px';
            break;
        case 'medium':
            blurValue = '25px';
            break;
        case 'hard':
            blurValue = '35px';
            break;
    }

    ctx.filter = `blur(${blurValue})`;
    ctx.fillStyle = 'blue';

    switch (shape) {
        case 'circle':
            ctx.beginPath();
            ctx.arc(200, 200, 100, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'square':
            ctx.fillRect(100, 100, 200, 200);
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(350, 350);
            ctx.lineTo(50, 350);
            ctx.closePath();
            ctx.fill();
            break;
        case 'rectangle':
            ctx.fillRect(50, 150, 300, 100);
            break;
        case 'pentagon':
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(350, 150);
            ctx.lineTo(300, 350);
            ctx.lineTo(100, 350);
            ctx.lineTo(50, 150);
            ctx.closePath();
            ctx.fill();
            break;
    }
}

function getRandomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}

function startGame() {
    currentShape = getRandomShape();
    drawShape(currentShape);
    document.getElementById('gameArea').style.display = 'block';
}

document.getElementById('startGame').addEventListener('click', () => {
    document.getElementById('difficultyArea').style.display = 'none';
    startGame();
});

document.getElementById('submitGuess').addEventListener('click', () => {
    const guess = document.getElementById('guessInput').value.toLowerCase();
    const result = document.getElementById('result');
    if (guess === currentShape) {
        result.textContent = 'Correct!';
        score++;
    } else {
        result.textContent = 'Try again!';
    }
    document.getElementById('score').textContent = score;
    startGame();
});