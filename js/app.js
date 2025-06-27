// Sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  transition: 500,
  height: 400,
  interval: 3000,
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    shift: 0,
    padding: 0,
  });
});

// Materialboxed
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".materialboxed");
  var instances = M.Materialbox.init(elems, {});
});

// Colapsible
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, {});
});

// Scrollspy
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, {});
});

// Floating action button
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {});
});

// Modal
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
});

// Dropdown
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, {});
});
