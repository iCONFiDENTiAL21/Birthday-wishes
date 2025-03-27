// 🎉 Countdown Timer
const birthdayDate = new Date("March 28, 2025 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

setInterval(function() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownElement.innerHTML = "🎊 Happy Birthday! 🎊";
        startConfetti(); // Confetti Animation
    }
}, 1000);

// 🎁 Reveal Hidden Message
function revealMessage() {
    document.getElementById("hidden-message").style.display = "block";
}

// 🎶 Music Play/Pause
let music = document.getElementById("birthdayMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// 🎈 Confetti Effect (Using JavaScript Canvas)
function startConfetti() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            dx: (Math.random() - 0.5) * 4,
            dy: Math.random() * 4 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += p.dy;
            p.x += p.dx;

            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        }
        requestAnimationFrame(draw);
    }

    draw();
}