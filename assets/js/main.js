const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const slideWidth = 250+30;
const visibleSlides = Math.floor(document.querySelector('.slider').offsetWidth / slideWidth);
let currentIndex = 0;
for (let i = 0; i < visibleSlides; i++) {
    const clone = slides[i].cloneNode(true);
    sliderTrack.appendChild(clone);
}

setInterval(() => {
    currentIndex++;
    sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    if (currentIndex >= slides.length) {
        setTimeout(() => {
            sliderTrack.style.transition = 'none';
            sliderTrack.style.transform = 'translateX(0)';
            currentIndex = 0;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    sliderTrack.style.transition = 'transform 0.7s ease-in-out';
                });
            });
        }, 500);
    }
}, 2000);




const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (hamburger.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); 
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});
