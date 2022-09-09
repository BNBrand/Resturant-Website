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


// let signUp = document.querySelector('signUp');
// let signin = document.querySelector('signIn');
// let container = document.querySelector('f-container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });

let signIn = document.querySelector("#signInButton");
let signUp = document.querySelector("#signUpButton");
let signInForm = document.querySelector(".container-form .sign-in-form");
let signUpForm = document.querySelector(".container-form .sign-up-form");
let overlay_container = document.querySelector(".container-form .overlay-container");
let overlay = document.querySelector(".container-form .overlay-container .overlay");

signIn.addEventListener("click", function() {
   signInfunction()
});
signUp.addEventListener("click", function() {
  signUpfunction()
});

function signInfunction(){
  overlay_container.style.transform = "translateX(100%)";
  overlay.style.transform = "translateX(-50%)";
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
}
function signUpfunction() {
  overlay_container.style.transform = "translateX(0)";
  overlay.style.transform = "translateX(0)";
  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
}