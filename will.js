
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const images = document.querySelectorAll('.slide-up');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });
  images.forEach(image => {
    appearOnScroll.observe(image);
  });



  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".sub-title");
    const originalText = textElement.textContent;
    let index = originalText.length;
    let deleting = true;

    function deleteText() {
        if (index >= 0) {
            textElement.textContent = originalText.slice(0, index);
            index--;
            setTimeout(deleteText, 60); // Adjust the speed of deletion here (100ms per character)
        } else {
            deleting = false;
            setTimeout(addText, 500); // Pause before starting to add text
        }
    }

    function addText() {
        if (index < originalText.length) {
            textElement.textContent = originalText.slice(0, index + 1);
            index++;
            setTimeout(addText, 60); // Adjust the speed of adding text here (100ms per character)
        } else {
            deleting = true;
            setTimeout(deleteText, 500); // Pause before starting to delete text again
        }
    }

    deleteText();
});

