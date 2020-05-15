const header = document.querySelector("header");
const nav = header.querySelector("nav");
const scrollPosition = document.documentElement.scrollTop;

let last_known_scroll_position = 0;
let before_position = window.scrollY;
let ticking = false;
let SCROLL_DIR = 0;
const where = 63.20000076293945;

function doSomething(scroll_pos) {
  // 특정위치에서 마우스 휠이 내려가는 방향일 때
  if (scroll_pos >= where && SCROLL_DIR === -1) {
    nav.classList.add("scroll");
  } else if (scroll_pos <= where && SCROLL_DIR === 1) {
    nav.classList.remove("scroll");
  }
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;
  if (before_position < last_known_scroll_position) {
    SCROLL_DIR = -1;
  } else if (before_position > last_known_scroll_position) {
    SCROLL_DIR = 1;
  }

  before_position = last_known_scroll_position;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
