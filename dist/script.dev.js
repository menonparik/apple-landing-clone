"use strict";

var toggle = document.getElementsByClassName("toggle-button")[0];
var navLinks = document.getElementsByClassName("navbar-hid")[0];
toggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});