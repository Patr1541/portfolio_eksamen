// Darkmode Javascript
console.log("Loaded forms javascrips site...");

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

html.classList.add("light");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

/* 
html.classList.remove("dark"); */

/*.........JUBIII LEG MED TOGGLE KNAP...........*/

console.log("Loaded localstorage javascript site...");

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  btn.classList.add("active");
  btn.textContent = "Darkmode OFF";
} else {
  btn.textContent = "Darkmode ON";
}

function toggleTheme() {
  html.classList.toggle("dark");
  btn.classList.toggle("active");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "Darkmode OFF";
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "Darkmode ON";
  }
}
