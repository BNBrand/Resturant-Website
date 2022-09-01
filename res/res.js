let openBtn = document.querySelector(".btn");
openBtn.addEventListener("click", function () {
  showNav();
});
let closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener("click", function () {
  hideNav();
});
function showNav() {
  document.querySelector(".menu2").style.width = "250px";
  document.querySelector(".header2").style.display = "none";
  document.querySelector(".header1").style.backgroundImage = "linear-gradient(to right, grey, black)";
  document.querySelector(".header1").style.color = "white";
}
function hideNav() {
  document.querySelector(".menu2").style.width = "0";
  document.querySelector(".header2").style.display = "flex";
  document.querySelector(".header1").style.backgroundImage = "linear-gradient(to right, #ddd, #aaa)";
  document.querySelector(".header1").style.color = "black";
}
