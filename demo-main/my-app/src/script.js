document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    const checkmark = document.querySelector(".checkmark");
    const hiddenContent = document.querySelector(".hidden-content");
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const tipBoxes = document.querySelectorAll(".tip-box");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.1 }
    );

    tipBoxes.forEach(box => observer.observe(box));
  
    let currentIndex = 0;

    const slideWidth = slides[0].getBoundingClientRect().width;
  
    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });
  
    const moveToSlide = (currentSlide, targetSlide) => {
      track.style.transform = `translateX(-${targetSlide.style.left})`;
    };
  
    const updateButtons = () => {
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
    };
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        moveToSlide(slides[currentIndex - 1], slides[currentIndex]);
        updateButtons();
      }
    });
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(slides[currentIndex + 1], slides[currentIndex]);
        updateButtons();
      }
    });
  
    updateButtons();


    setTimeout(() => {
      loader.style.opacity = "0"; 
      setTimeout(() => {
        loader.style.display = "none"; 
        checkmark.style.display = "block"; 
        checkmark.style.opacity = "1";
  
        setTimeout(() => {
          document.querySelector(".loader-container").style.display = "none";
          hiddenContent.style.display = "block";
        }, 1500);
      }, 500);
    }, 1500); 
  });