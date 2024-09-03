const slides = document.querySelectorAll(".slide");
var c = 0;
const totalSlides = slides.length;
const intervalTime = 3700;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const startSlider = () => {
    setInterval(() => {
        c++;
        if (c === totalSlides) {
            c = 0;
        }
        slideimg();
    }, intervalTime);
};

// Event listeners for buttons
const prev = () => {
    c--;
    if (c < 0) {
        c = totalSlides - 1;
    }
    slideimg();
};

const next = () => {
    c++;
    if (c === totalSlides) {
        c = 0; 
    }
    slideimg();
};

const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${c * 100}%)`;
    });
};
startSlider();