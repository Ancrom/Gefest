const navItem = document.querySelectorAll(".tabs-nav__item");
const tabItem = document.querySelectorAll(".tab-item");
const tabBtn = document.querySelector(".tabs__button");
const children = tabBtn.children;

tabBtn.addEventListener("click", () => {
  navItem[0].parentElement.classList.toggle("active");
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    for (let t = 0; t < navItem.length; t++) {
      navItem[0].parentElement.classList.remove("active");
      navItem[t].classList.remove("active", "hidden");
      tabItem[t].classList.remove("active");
    }
    tabBtn.innerHTML = navItem[i].innerHTML;
    navItem[i].classList.add("active", "hidden");
    tabItem[i].classList.add("active");
  });
}

document.onclick = function (e) {
  if (
    e.target !== tabBtn &&
    e.target !== children[0] &&
    e.target !== children[1]
  ) {
    navItem[0].parentElement.classList.remove("active");
  }
};

// slider

const buttonPrev = document.querySelector(".standarts__button--prev");
const buttonNext = document.querySelector(".standarts__button--next");
const sliderArray = Array.from(document.querySelectorAll(".standarts__item"));

buttonNext.addEventListener("click", () => {
  for (let i = 0; i < sliderArray.length; i++) {
    if (sliderArray[i].classList.contains("active")) {
      if (sliderArray.indexOf(sliderArray[i]) == (sliderArray.length - 1)) {
        return;
      }
      sliderArray[i + 1].classList.add("active");
      sliderArray[i].classList.remove("active");
      return;
    }
  }
});

buttonPrev.addEventListener("click", () => {
  for (let i = 0; i < sliderArray.length; i++) {
    if (sliderArray[i].classList.contains("active")) {
      if (sliderArray.indexOf(sliderArray[i]) == 0) {
        return;
			}
      sliderArray[i - 1].classList.add("active");
      sliderArray[i].classList.remove("active");
      return;
    }
  }
});

