let barmenu = document.querySelector(".bar-bergir");
let barul = document.querySelector(".nav-ul");
let ul = document.querySelector(".ul");
let body = document.querySelector(".body");
function menu() {
  ul.style.display = "block";
  barul.style.right = "0px";
  barul.style.transition = "all 1s linear";
  setTimeout(function () {
    body.style.position = "fixed";
  },1000);
}
function out() {
  body.style.position = "";
  ul.style.display = "none";
  barul.style.right = "500px";
  barul.style.transition = "all 1s linear";
}
