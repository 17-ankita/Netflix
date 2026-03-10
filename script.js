const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click", function (e) {
  const ok = confirm("You are leaving this page to subscribe on Netflix. Continue?");
  if (!ok) {
    e.preventDefault(); 
  }
});

const logo = document.querySelector("img");
let enlarged = false;

logo.addEventListener("click", function () {
  if (!enlarged) {
    logo.style.width = "320px";
  } else {
    logo.style.width = "200px";
  }
  enlarged = !enlarged;
});

document.body.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "#111";
});

window.addEventListener("load", function () {
  console.log("Welcome! Netflix India sample page loaded.");
});