function setTitleOpacity(n) {
  const start = 1000 + n * 50;
  const end = 1100 + n * 50;
  return {
    opacity: [
      [start, end],
      [0, 1],
    ],
  };
}
window.onload = function () {
  window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
  });
  lax.init();
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });
  lax.addElements(".ultron", {
    scrollY: {
      opacity: [
        [0, 80],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 0],
      ],
    },
  });
  lax.addElements(".loki", {
    scrollY: {
      opacity: [
        [40, 120],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, -200],
      ],
    },
  });
  lax.addElements(".thanos", {
    scrollY: {
      opacity: [
        [80, 160],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 0],
      ],
    },
  });
  lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 80],
        [1, 3],
      ],
      opacity: [
        [0, 50],
        [1, 0],
      ],
      translateY: [
        [0, 80],
        [0, 200],
      ],
    },
  });
  lax.addElements(".logo-text", {
    scrollY: {
      opacity: [
        [800, 900],
        [0, 1],
      ],
    },
  });
  lax.addElements(".scroll-tip", {
    scrollY: {
      translateY: [
        [0, 800],
        [-350, 0],
      ],
      opacity: [
        [0, 600],
        [1, 0],
      ],
      "letter-spacing": [
        [0, 600],
        [0, 150],
        {
          cssUnit: "px",
        },
      ],
    },
  });
  lax.addElements(".ironman-title", {
    scrollY: {
      filter: [
        [900, 1000, 1100, 1200, 1300, 1400, 1500],
        [0, 20, 0, 20, 0, 20, 0],
        {
          cssFn: function (val) {
            return `drop-shadow(0 0 ${val * 4}px yellow)`;
          },
        },
      ],
      translateY: [
        [1200, 1700, 5500],
        [200, "elCenterY", "elCenterY"],
      ],
    },
  });
  lax.addElements(".ironman-title-01", { scrollY: setTitleOpacity(1) });
  lax.addElements(".ironman-title-02", { scrollY: setTitleOpacity(2) });
  lax.addElements(".ironman-title-03", { scrollY: setTitleOpacity(3) });
  lax.addElements(".ironman-title-04", { scrollY: setTitleOpacity(4) });
  lax.addElements(".ironman-title-05", { scrollY: setTitleOpacity(5) });
  lax.addElements(".ironman-title-06", { scrollY: setTitleOpacity(6) });
  lax.addElements(".ironman-title-07", { scrollY: setTitleOpacity(7) });
  lax.addElements(".ironman-title-08", { scrollY: setTitleOpacity(8) });
  lax.addElements(".ironman-01", {
    scrollY: {
      translateY: [
        [1500, 2000],
        [800, -3000],
      ],
    },
  });
  lax.addElements(".ironman-02", {
    scrollY: {
      scale: [
        [2000, 2500],
        [0, 2],
      ],
      translateY: [
        [2000, 2200, 3000],
        [-200, 0, -200],
      ],
      translateX: [
        [2000, 2200, 3000],
        [0, 1000, 0],
      ],
    },
  });
  lax.addElements(".shield", {
    scrollY: {
      translateY: [
        [3200, 3400, 3600, 3800],
        [800, 1200, 1600, 1600],
      ],
      translateX: [
        [3200, 3400, 3600, 3800],
        [-800, "screenWidth - 200", 0, "screenWidth + 200"],
      ],
    },
  });
  lax.addElements(".capitan-title", {
    scrollY: {
      filter: [
        [3000, 3100, 3200, 3300, 3400, 3500, 3600],
        [0, 20, 0, 20, 0, 20, 0],
        {
          cssFn: function (val) {
            return `drop-shadow(0 0 ${val * 4}px blue)`;
          },
        },
      ],
      translateY: [
        [3000, 3500],
        [0, 500],
      ],
    },
  });
  lax.addElements(".capi", {
    scrollY: {
      translateX: [
        [3900, 4400],
        [400, -800],
      ],
      translateY: [
        [3900, 4400],
        [400, 400],
      ],
      scale: [
        [3900, 4400],
        [1, 0.5],
      ],
      opacity: [
        [3900, 4000],
        [0, 1],
      ],
    },
  });
  lax.addElements(".shield02", {
    scrollY: {
      translateX: [
        [3900, 4400],
        [0, 2500],
      ],
      translateY: [
        [3900, 4600],
        [0, 400],
      ],
      scale: [
        [3900, 4300],
        [1, 10],
      ],
      opacity: [
        [3900, 4000],
        [0, 1],
      ],
    },
  });
  lax.addElements(".rayo", {
    scrollY: {
      scaleX: [
        [4300, 4400],
        [0, 1],
      ],
      translateY: [
        [4400, 4500],
        [-200, 0],
      ],
      opacity: [
        [4600, 4700],
        [1, 0],
      ],
    },
  });
  lax.addElements(".thor", {
    scrollY: {
      translateX: [
        [4800, 5000],
        [-500, 800],
      ],
      translateY: [
        [4800, 5000],
        [0, -3000],
      ],
    },
  });
  lax.addElements(".thor-title-01 img", {
    scrollY: {
      scale: [
        [4700, 4800],
        [3, 1],
      ],
      opacity: [
        [4700, 4800],
        [0, 1],
      ],
    },
  });
  lax.addElements(".thor-title-02 img", {
    scrollY: {
      scale: [
        [4700, 4800],
        [3, 1],
      ],
      opacity: [
        [4700, 4800],
        [0, 1],
      ],
    },
  });
  lax.addElements(".thor-title-03 img", {
    scrollY: {
      scale: [
        [4700, 4800],
        [3, 1],
      ],
      opacity: [
        [4700, 4800],
        [0, 1],
      ],
    },
  });
  lax.addElements(".thor-title-04 img", {
    scrollY: {
      scale: [
        [4700, 4800],
        [3, 1],
      ],
      opacity: [
        [4700, 4800],
        [0, 1],
      ],
    },
  });
  lax.addElements(".thor02", {
    scrollY: {
      opacity: [
        [4700, 5000],
        [0, 1],
      ],
      filter: [
        [4700, 5000],
        [100, 0],
        {
          cssFn: (value) => {
            return `blur(${value}px)`;
          },
        },
      ],
      translateY: [
        [4700, 5000],
        [-5000, -90],
      ],
    },
  });
  lax.addElements(".avengers-logo img", {
    scrollY: {
      opacity: [
        [5200, 5600],
        [0, 1],
      ],
      scale: [
        [5200, 5600],
        [0, 1],
      ],
    },
  });
};