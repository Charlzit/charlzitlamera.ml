(function () {
    const controlButtons = Array.from(document.querySelectorAll(".control"));
    const themeButton = document.querySelector(".theme-btn");
    const body = document.body;

    controlButtons.forEach(button => {
        button.addEventListener("click", function() {
            const activeButton = document.querySelector(".active-btn");
            const activeSection = document.querySelector(".active");
            const targetSection = document.getElementById(button.dataset.id);
            
            activeButton.classList.remove("active-btn");
            this.classList.add("active-btn");
            
            activeSection.classList.remove("active");
            targetSection.classList.add("active");
        });
    });

    themeButton.addEventListener("click", () => {
        body.classList.toggle("light-mode");
    });
})();
document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("particles");
  
    document.addEventListener("mousemove", function (e) {
      createParticle(e.pageX, e.pageY);
    });
  
    function createParticle(x, y) {
      var particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      container.appendChild(particle);
  
      setTimeout(function () {
        container.removeChild(particle);
      }, 1000);
    }
  });
  
