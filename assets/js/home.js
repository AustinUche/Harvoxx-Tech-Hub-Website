let popup = document.querySelector("#popup");
let close = document.querySelector("#close");
var logo = document.querySelector("#logo")

logo.addEventListener("click", () => {
  popup.style.display = "block";
})

close.addEventListener("click", () => {
  popup.style.display = "none";
});

// Assignment
// write a program that checks the username and password of a user
var username = "Uche";
var password = "mynameisuche";

if (username === "Uche") {
  if (password === "mynameisuche") {
    console.log("You're successfully logged in");
  } else {
    console.log("Username or password incorrect");
  }
}

if (username === "Uche" && password === "mynameisuche") {
  console.log("You're successfully logged in");
} else {
  console.log("Username or password incorrect");
}


const toUp = document.querySelector("#to-up");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toUp.style.display = "flex";
  } else {
    toUp.style.display = "none";
  }
});

toUp.addEventListener("click", () => {
  window.scrollTo(0, 0)
});