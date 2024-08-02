let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

let btnopen = document.getElementById("open");
let btnClose = document.getElementById("close");
let navbar = document.querySelector(".navbarList");

btnClose.onclick = function () {
  navbar.classList.add("hid");
  this.classList.add("hid");
  btnopen.classList.remove("hid");
};
btnopen.onclick = function () {
  this.classList.add("hid");
  btnClose.classList.remove("hid");
  btnClose.style.background = "#252525";
  navbar.classList.remove("hid");
  search.classList.add("hid");
  btnSearch.classList.remove("hid");
  searchclose.classList.add("hid");
};

let btnSearch = document.getElementById("btnSearch");
let searchclose = document.getElementById("searchclose");
let search = document.querySelector(".search");

btnSearch.onclick = function () {
  this.classList.add("hid");
  searchclose.classList.remove("hid");
  search.classList.remove("hid");
  navbar.classList.add("hid");
  btnopen.classList.remove("hid");
  btnClose.classList.add("hid");
  searchclose.style.background = "#252525";
};
searchclose.onclick = function () {
  search.classList.add("hid");
  this.classList.add("hid");
  btnSearch.classList.remove("hid");
};

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

  return direction;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  direction: getDirection(),
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navBarDown
let down = document.getElementById("down");
let up = document.getElementById("up");
let upDown = document.querySelector(".upDown");
let navBarDown = document.querySelector(".navBarDown");

let navBarDownTwo = document.querySelector(".navBarDownTwo");
let upDownTwo = document.querySelector(".upDownTwo");
let downTwo = document.getElementById("downTwo");
let upTwo = document.getElementById("upTwo");

upDown.onclick = function () {
  navBarDown.classList.toggle("hid");
  down.classList.toggle("hid");
  up.classList.toggle("hid");
};
upDownTwo.onclick = function () {
  navBarDownTwo.classList.toggle("hid");
  downTwo.classList.toggle("hid");
  upTwo.classList.toggle("hid");
};
