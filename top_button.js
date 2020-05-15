const toptop = document.querySelector(".toptop");
console.log(toptop);

console.log(window.scrollY);

function grapes() {
  scrollBy(0, scrollY / -10);
}

function handleClick() {
  banana = setInterval(
    "if(scrollY>10){grapes();}else{clearInterval(banana);}",
    10
  );
}

toptop.addEventListener("click", handleClick);
