const hamburger = document.querySelector(".navbar__burger");
const navigation = document.querySelector(".navmenu");

hamburger.addEventListener("click", myFunction);

function myFunction() {
  if (navigation.className === "navmenu") {
    navigation.classList.add("responsive");
  } else {
    navigation.classList.remove("responsive");
  }
}
