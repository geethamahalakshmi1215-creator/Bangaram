const surpriseBtn = document.getElementById('surpriseBtn');
const messagePanel = document.getElementById('messagePanel');
const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const confetti = [];
const colors = ['#ffe066', '#ff6b6b', '#6bc0ff', '#c79bff', '#76ff94'];

function createPiece() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * -confettiCanvas.height,
    size: Math.random() * 8 + 6,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 3 + 2,
    rotation: Math.random() * Math.PI * 2,
    rotateSpeed: Math.random() * 0.12 - 0.06,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

function addConfetti(amount = 120) {
  for (let i = 0; i < amount; i++) confetti.push(createPiece());
}

function draw() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach((piece, index) => {
    piece.x += piece.speedX;
    piece.y += piece.speedY;
    piece.rotation += piece.rotateSpeed;

    if (piece.y > confettiCanvas.height + 20) {
      confetti.splice(index, 1);
      return;
    }

    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 1.8);
    ctx.restore();
  });
  requestAnimationFrame(draw);
}

draw();

surpriseBtn.addEventListener('click', () => {
  messagePanel.classList.remove('hidden');
  surpriseBtn.disabled = true;
  surpriseBtn.textContent = 'Enjoy Your Day!';
  addConfetti(160);
});

setTimeout(() => {
  surpriseBtn.classList.add('pulse');
}, 1200);
