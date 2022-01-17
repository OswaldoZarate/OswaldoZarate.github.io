/* ---- particles.js config ---- */

particlesJS("particle", {
    "particles": {
      "number": {
        "value": 140,           // Number of particles
        "density": {
          "enable": true,       // Density
          "value_area": 800     // Particles per width * height
        }
      },
      "color": {
        "value": "#ffffff"      // Color
      },
      "shape": {
        "type": "circle",       // Shape
        "stroke": {
          "width": 1,           // Stroke width
          "color": "#000000"    // Stroke color
        },
        "polygon": {
          "nb_sides": 7         // Number of sides
        },
        "image": {
          "src": "img/github.svg",    // Image
          "width": 100,         // Width
          "height": 100         // Height
        }
      },
      "opacity": {            // Opacity
        "value": 0.5,          // Opacity
        "random": false,        // Random opacity
        "anim": {
          "enable": false,      // Enable animation
          "speed": 1,           // Animation speed
          "opacity_min": 0.1,    // Minimum opacity
          "sync": false         // Sync
        }
      },
      "size": {                // Size
        "value": 3,           // Size
        "random": true,       // Random size
        "anim": {
          "enable": false,   // Enable animation
          "speed": 80,       // Animation speed
          "size_min": 0.1,   // Minimum size
          "sync": false      // Sync
        }
      },
      "line_linked": {
        "enable": true,       // Enable lines
        "distance": 150,      // Distance
        "color": "#ffffff",   // Line color
        "opacity": 0.6,       // Line opacity
        "width": 1            // Line width
      },
      "move": {
        "enable": true,         // Enable movement
        "speed": 5,             // Speed
        "direction": "none",    // Direction
        "random": false,        // Random
        "straight": false,      // Straight
        "out_mode": "out",      // Out mode
        "bounce": false,        // Bounce
        "attract": {
          "enable": false,      // Attract
          "rotateX": 600,       // Attract rotateX
          "rotateY": 1200       // Attract rotateY
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",    // Detect on
      "events": {               // Events
        "onhover": {            // On hover
          "enable": true,       // Enable
          "mode": "repulse"        // Mode
        },
        "onclick": {            // On click
          "enable": true,       // Enable
          "mode": "push"        // Mode
        },
        "resize": true          // Resize
      },
      "modes": {                // Modes
        "grab": {               // Grab
          "distance": 140,      // Distance
          "line_linked": {      // Line linked
            "opacity": 1        // Opacity
          }
        },
        "bubble": {             // Bubble
          "distance": 400,      // Distance
          "size": 40,           // Size
          "duration": 2,        // Duration
          "opacity": 8,         // Opacity
          "speed": 3            // Speed
        },
        "repulse": {
          "distance": 50,      // Distance
          "duration": 0.4       // Duration
        },
        "push": {
          "particles_nb": 4     // Particles
        },
        "remove": {
          "particles_nb": 2     // Particles
        }
      }
    },
    "retina_detect": true       // Retina
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;       // Declare DOM elements
  stats = new Stats;                       
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';     // Position
  stats.domElement.style.left = '0px';              
  stats.domElement.style.top = '0px';               
  document.body.appendChild(stats.domElement);      // Append to body
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);          
  };
  requestAnimationFrame(update);