// Select menu bar button and overlay
const menuBars = $('#menu-bars');
const overlay = $('#overlay');

// Array of navigation items
const navs = [$('#nav-1'), $('#nav-2'), $('#nav-3'), $('#nav-4'), $('#nav-5')];

// Function to toggle the navigation menu
function toggleNav() {
  // Toggle class change on menu bar button
  menuBars.toggleClass('change');
  // Toggle class overlay-active on overlay
  overlay.toggleClass('overlay-active');

  // If the overlay has the class overlay-active
  if (overlay.hasClass('overlay-active')) {
    // Remove class overlay-slide-left and add class overlay-slide-right
    overlay.removeClass('overlay-slide-left').addClass('overlay-slide-right');
    // Loop through each navigation item
    navs.forEach((nav, index) => {
      // Delay the animation of each navigation item
      setTimeout(() => {
        // Remove class slide-out-{index + 1} and add class slide-in-{index + 1}
        nav.removeClass(`slide-out-${index + 1}`).addClass(`slide-in-${index + 1}`);
      }, (index + 1) * 100);
    });
  } else {
    // Remove class overlay-slide-right and add class overlay-slide-left
    overlay.removeClass('overlay-slide-right').addClass('overlay-slide-left');
    // Loop through each navigation item in reverse order
    navs.forEach((nav, index) => {
      // Delay the animation of each navigation item
      setTimeout(() => {
        // Remove class slide-in-{index + 1} and add class slide-out-{index + 1}
        nav.removeClass(`slide-in-${index + 1}`).addClass(`slide-out-${index + 1}`);
      }, (navs.length - index) * 100);
    });
  }
}

// Attach click event to menu bar button
menuBars.on('click', toggleNav);


// Attach click event to each navigation item
navs.forEach(nav => nav.on('click', toggleNav));

var square = document.getElementsByClassName('square');

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('mouseenter', function () {
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function () {
      this.classList.remove("rubberBand");
    }, false);
  })
}



var typed = new Typed('#typed', {
  strings: ['CODER.', 'DESIGNER.', 'PHOTOGRAFER.'],
  typeSpeed: 140,
  backSpeed: 70,
  loop: true,
  onComplete: function (self, i) {
    console.log('String typed:', self.strings[i]);
  }
});










