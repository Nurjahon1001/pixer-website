const hamburger = document.querySelector(".hamburger");
const activeHeader = document.querySelector(".header");
const navigation = document.querySelector(".nav_btn_div");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("activenav");
  activeHeader.classList.toggle("activeHeader");
}

document.querySelectorAll(".navigation__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navigation.classList.remove("activenav");
  activeHeader.classList.toggle("activeHeader");
}))
