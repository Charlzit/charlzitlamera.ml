document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const slideCounter = document.getElementById('slideCounter');
    const progressBar = document.getElementById('progress');
    let currentSlide = 0;

    // Show the first slide
    slides[currentSlide].classList.add('active');
    updateSlideCounter();
    updateProgress();

    // Navigation functions
    function showSlide(index) {
        // Fade out current slide
        slides[currentSlide].style.opacity = '0';
        setTimeout(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = index;
            
            // Fade in new slide
            slides[currentSlide].classList.add('active');
            slides[currentSlide].style.opacity = '1';
            
            updateSlideCounter();
            updateProgress();
        }, 300);
    }

    function nextSlide() {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    function updateSlideCounter() {
        slideCounter.textContent = `${currentSlide + 1}/${slides.length}`;
    }

    function updateProgress() {
        const progress = ((currentSlide + 1) / slides.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Event listeners
    document.getElementById('nextSlide').addEventListener('click', nextSlide);
    document.getElementById('prevSlide').addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowRight':
            case 'Space':
                nextSlide();
                e.preventDefault();
                break;
            case 'ArrowLeft':
                prevSlide();
                e.preventDefault();
                break;
            case 'Home':
                showSlide(0);
                e.preventDefault();
                break;
            case 'End':
                showSlide(slides.length - 1);
                e.preventDefault();
                break;
        }
    });

    // Touch navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    }

    // Add transition to slides
    slides.forEach(slide => {
        slide.style.transition = 'opacity 0.3s ease-in-out';
        slide.style.opacity = '0';
    });
    slides[0].style.opacity = '1';
});
