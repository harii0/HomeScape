// Trigger the animation when the page loads
window.addEventListener("load", function () {
  // Set up the GSAP timeline
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Get the elements to animate
  var hero = document.querySelector(".home");

  // Add animations to the timeline
  tl.to(hero, { opacity: 0, duration: 1 });
});

var imageContainer = document.querySelector(".home");
var image = document.querySelector(".hero");
