const more = document.getElementsByClassName("sub");
const more_array = Array.from(more);
const kinds = document.getElementsByClassName("kind");
const kinds_array = Array.from(kinds);
const folder = document.getElementsByClassName("folder");
const folder_array = Array.from(folder);

let number = [0, 0, 0, 0, 0, 0, 0, 0]; // 8개의 더보기 버튼

function handleClick(event) {
  event.preventDefault();
  const parent = event.target.parentNode;
  const arr = parent.getElementsByClassName("sub-button");
  const real_arr = Array.from(arr);
  const arrays = real_arr[0].getElementsByClassName("kd");

  const filArr = Array.from(arrays);

  for (let i = 0; i < kinds_array.length; i++) {
    if (kinds_array[i].parentNode === parent) {
      number[i] = 1;
      break;
    }
  }
  event.target.classList.add("in-house");
  filArr.forEach(function (e) {
    e.classList.remove("in-house");
  });

  const subBtn = event.target.parentNode.lastElementChild;
  subBtn.classList.remove("in-house");
  subBtn.innerHTML = "태그접기 <i class='fas fa-arrow-up'></i>";
}

function handleFolderClick(event) {
  event.target.classList.add("in-house");
  const parent = event.target.parentNode;
  const Btn = parent.getElementsByClassName("sub");
  Array.from(Btn).forEach(function (e) {
    e.classList.remove("in-house");
  });

  const subBtn = parent.getElementsByClassName("sub-button");
  const arr = Array.from(subBtn);
  const items = arr[0].getElementsByClassName("kd");
  subBtn_array = Array.from(items);
  subBtn_array.forEach(function (item) {
    item.classList.add("in-house");
  });
  // 배열 버튼을 0으로 다시 만들어주어야 한다.

  for (let i = 0; i < folder_array.length; i++) {
    if (folder_array[i] === event.target) {
      number[i] = 0;
      break;
    }
  }
  console.log(number);
}

folder_array.forEach(function (e) {
  e.addEventListener("click", handleFolderClick);
});

more_array.forEach(function (e) {
  e.addEventListener("click", handleClick);
  // e.addEventListener("click", handleClickRemove);
});

for (let i = 0; i < kinds_array.length; i++) {
  let in_number = 1;
  const first = kinds_array[i].firstElementChild;
  const beforeSize = first.offsetWidth;
  const beforeWindowSize = window.innerWidth;

  //console.log(moreItem);
  window.addEventListener("resize", function () {
    const more = first.parentNode.nextElementSibling.nextElementSibling;
    const moreItem = more.firstElementChild;

    if (beforeSize - first.offsetWidth > 1) {
      const last2 = kinds_array[i].lastElementChild;
      const next = kinds_array[i].nextElementSibling.nextElementSibling;
      kinds_array[i].removeChild(last2);
      if (number[i] === 1) {
        last2.classList.remove("in-house");
      } else {
        last2.classList.add("in-house");
      }
      next.appendChild(last2);
    } else if (beforeWindowSize + 50 < window.innerWidth) {
      if (moreItem) {
        more.removeChild(moreItem);

        kinds_array[i].appendChild(moreItem);
        moreItem.classList.remove("in-house");
      }
    }
  });
}
