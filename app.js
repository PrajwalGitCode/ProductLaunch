// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('reveal') })
}, {threshold:0.1});
document.querySelectorAll('.fade-up').forEach(el=> io.observe(el));


// Testimonials slider 

const track = document.getElementById("track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
const slides = document.querySelectorAll(".testi");

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

next.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

// init
updateSlider();


// Countdown to launch (IST)
const dEl = document.getElementById('d');
const hEl = document.getElementById('h');
const mEl = document.getElementById('m');
const sEl = document.getElementById('s');

function getISTOffsetMs(date){
  // India Standard Time is UTC+5:30, no DST
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const ist = new Date(utc + 5.5 * 3600000);
  return ist.getTime();
}

const launchUtc = Date.parse('2025-09-30T04:30:00Z'); // 10:00 IST

function tick(){
  const nowUtc = Date.now();
  let diff = launchUtc - nowUtc;
  if(diff < 0) diff = 0;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  dEl.textContent = String(d).padStart(2,'0');
  hEl.textContent = String(h).padStart(2,'0');
  mEl.textContent = String(m).padStart(2,'0');
  sEl.textContent = String(s).padStart(2,'0');
}
tick();
setInterval(tick, 1000);

// =============================
// Footer year
// =============================
document.getElementById('yr').textContent = new Date().getFullYear();


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
