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



const aboutHead = document.querySelector(".about .container .right .up h3")
const aboutHeadP = document.querySelector(".about .container .right .up p");
const aboutbox1 = document.querySelector(".about .container .right .down1");
const aboutbox2 = document.querySelector(".about .container .right .down2");
const aboutbox3 = document.querySelector(".about .container .right .down3");
const aboutbox4 = document.querySelector(".about .container .right .down4");
const serviceHead = document.querySelector(".services .container h2");
const serviceP = document.querySelector(".services .container #service")
const serviceBox = document.querySelectorAll(".services .container .box-container .box")


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 350) {
    aboutHead.classList.add("active")
  } else {
    aboutHead.classList.remove("active")
  }

  if (window.pageYOffset > 370) {
    aboutHeadP.classList.add("active");
  } else {
    aboutHeadP.classList.remove("active")
  }

  if (window.pageYOffset > 532) {
    aboutbox1.classList.add("active");
    aboutbox2.classList.add("active");
  } else {
    aboutbox1.classList.remove("active");
    aboutbox2.classList.remove("active");
  }

  if (window.pageYOffset > 716) {
    aboutbox3.classList.add("active");
    aboutbox4.classList.add("active");
  } else {
    aboutbox3.classList.remove("active");
    aboutbox4.classList.remove("active");
  }

  if (window.pageYOffset > 1073) {
    serviceHead.classList.add("active");
  } else {
    serviceHead.classList.remove("active");
  }

  if (window.pageYOffset > 1076) {
    serviceP.classList.add("active")
  } else {
    serviceP.classList.remove("active")
  }

  for (var i = 0; i <= 4; i++){
    if (i % 2 == 0 && window.pageYOffset < 1224) {
      serviceBox.style.transform = "translateX(50px)"
      serviceBox.style.opacity = 0
    } else if (i % 2 == 0 && window.pageYOffset > 1224) {
      serviceBox.style.transform = "translateX(0px)"

    }
  }
})


// var num = 10
// var interval = setInterval(function () {
//   num = num - 1
//   console.log(num)

//   if (num == 0) {
//     clearInterval(interval)
//   }
// }, 1000)

// var hr = document.getElementById("hour")
// var min = document.getElementById("min")
// var sec = document.getElementById("sec")

// var seconds = 60
// var minutes = 0
// var hour = 1

// const theCount = setInterval(function () {
//   hr.innerHTML = hour
//   min.textContent = minutes 
//   sec.innerHTML = 0 + "0"

//   seconds = seconds - 1
//   sec.innerHTML = seconds
//   if (seconds == 59) {
//     hour = hour - 1
//     minutes = seconds
//     hr.innerHTML = hour
//     min.innerHTML = minutes
//   }
//   console.log(seconds)
// }, 1000);

