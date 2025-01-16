document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    const checkmark = document.querySelector(".checkmark");
    const hiddenContent = document.querySelector(".hidden-content");
  
    setTimeout(() => {
      loader.style.opacity = "0"; // Fade-out loader
      setTimeout(() => {
        loader.style.display = "none"; // Hide loader
        checkmark.style.display = "block"; // Show checkmark
        checkmark.style.opacity = "1"; // Fade-in checkmark
  
        setTimeout(() => {
          document.querySelector(".loader-container").style.display = "none";
          hiddenContent.style.display = "block"; // Show content
        }, 1500);
      }, 500);
    }, 1500); 
  });
  