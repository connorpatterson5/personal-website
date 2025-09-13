const canvas = document.getElementById('animated-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let squares = [];
  const numSquares = 30;
  const colors = ['#5ffbf1', '#7f53ac', '#232526', '#fff'];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createSquare() {
    const size = Math.random() * 32 + 16;
    return {
      x: Math.random() * canvas.width,
      y: -size,
      size,
      speed: Math.random() * 2 + 1,
      dx: Math.random() * 1.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  function initSquares() {
    squares = [];
    for (let i = 0; i < numSquares; i++) {
      squares.push(createSquare());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let sq of squares) {
      ctx.fillStyle = sq.color;
      ctx.globalAlpha = 0.7;
      ctx.fillRect(sq.x, sq.y, sq.size, sq.size);
      ctx.globalAlpha = 1;
      sq.x += sq.dx;
      sq.y += sq.speed;
      if (sq.y > canvas.height || sq.x > canvas.width) {
        Object.assign(sq, createSquare());
        sq.y = -sq.size;
      }
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initSquares();
  });

  resizeCanvas();
  initSquares();
  animate();
}
