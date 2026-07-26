// Start Header
let barsIcon = document.querySelector("header i.bars");
let navBar = document.querySelector("header ul");
// start inactive
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navBar.classList.remove("active");
  }
});
// toggle activity when click
barsIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
// End Header
// Start slider
let sliderButtons = Array.from(
  document.querySelectorAll("section.slider .slider-buttons li"),
);
let sliderImg = document.querySelector("section.slider .slider-img");

setSliderImg();

sliderButtons.forEach((el) => {
  el.addEventListener("click", () => {
    //reset active
    sliderButtons.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
    // add img
    setSliderImg();
  });
});

function setSliderImg() {
  let activeImg = document.querySelector(
    "section.slider .slider-buttons li.active",
  ).dataset.imgName;
  sliderImg.style.backgroundImage = `url(../../../imgs/${activeImg}.jpg)`;
}
// End slider
