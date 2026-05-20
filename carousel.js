const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentSlide = 0;
let autoPlay;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 3000);
}

function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

startAutoPlay();