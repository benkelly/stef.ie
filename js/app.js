(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hard cap so click-to-push can't grow the particle array without bound.
  var MAX_PARTICLES = 400;

  /* Config is inlined to avoid an extra network request on load. */
  particlesJS("particles-js", {
    particles: {
      number: { value: 250, density: { enable: true, value_area: 6093 } },
      color: { value: "#ffffff" },
      shape: {
        type: "image",
        image: { src: "image/ghost.png", width: 128, height: 128 },
      },
      opacity: { value: 0.5, random: true, anim: { enable: false } },
      size: { value: 60, random: true, anim: { enable: false } },
      line_linked: { enable: false },
      move: {
        enable: !reduceMotion,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: !reduceMotion, mode: "bubble" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8, speed: 3 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  window.addEventListener("click", function () {
    var pJS = window.pJSDom[0] && window.pJSDom[0].pJS;
    if (!pJS) return;
    var extra = pJS.particles.array.length - MAX_PARTICLES;
    if (extra > 0) pJS.particles.array.splice(0, extra);
  });
})();
