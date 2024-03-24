let popup = document.querySelector("#popup");
let close = document.querySelector("#close");
var logo = document.querySelector("#logo")

logo.addEventListener("click", () => {
  popup.style.display = "block";
})

close.addEventListener("click", () => {
  popup.style.display = "none";
});



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


const heroLeft = document.querySelector(".hero .container .left")
const heroRight = document.querySelector(".hero .container .right")
const aboutHead = document.querySelector(".about .container .right .up h3")
const aboutHeadP = document.querySelector(".about .container .right .up p");
const aboutbox1 = document.querySelector(".about .container .right .down1");
const aboutbox2 = document.querySelector(".about .container .right .down2");
const aboutbox3 = document.querySelector(".about .container .right .down3");
const aboutbox4 = document.querySelector(".about .container .right .down4");
const serviceHead = document.querySelector(".services .container h2");
const pricingHead = document.querySelector(".pricing .container h2");
const contactHead = document.querySelector(".contact .container .h2-container");
const serviceP = document.querySelector(".services .container #service")
const serviceBox1 = document.querySelector(".services .container .box-container #box1");
const serviceBox2 = document.querySelector(".services .container .box-container #box2");
const serviceBox3 = document.querySelector(".services .container .box-container #box3");
const serviceBox4 = document.querySelector(".services .container .box-container #box4");
const serviceBox5 = document.querySelector(".services .container .box-container #box5");
const serviceBox6 = document.querySelector(".services .container .box-container #box6");
const contactBox1 = document.querySelector(".contact .container .left .box1")
const contactBox2 = document.querySelector(".contact .container .left .box2")
const contactBox3 = document.querySelector(".contact .container .left .box3")
const contactForm = document.querySelector(".contact .container .right")
const footer = document.querySelector(".footer .container")

window.addEventListener("load", () => {
    heroLeft.classList.add("active");
    heroRight.classList.add("active");
})

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

  if (window.pageYOffset > 1292) {
    serviceBox1.classList.add("active")
    serviceBox2.classList.add("active")
  } else {
    serviceBox1.classList.remove("active")
    serviceBox2.classList.remove("active")
  }

  if (window.pageYOffset > 1880) {
    serviceBox3.classList.add("active")
    serviceBox4.classList.add("active")
  } else {
    serviceBox3.classList.remove("active")
    serviceBox4.classList.remove("active")
  }
  
  if (window.pageYOffset > 2494) {
    serviceBox5.classList.add("active")
    serviceBox6.classList.add("active")
  } else {
    serviceBox5.classList.remove("active")
    serviceBox6.classList.remove("active")
  }

  if (window.pageYOffset > 4438) {
    contactBox1.classList.add("active");
    contactForm.classList.add("active")
  } else {
    contactBox1.classList.remove("active");
    contactForm.classList.remove("active")
  }

  if (window.pageYOffset > 4635) {
    contactBox2.classList.add("active");
    contactBox3.classList.add("active");
  } else {
    contactBox2.classList.remove("active");
    contactBox3.classList.remove("active");
  }

  if (window.pageYOffset > 5100) {
    footer.classList.add("active");
  } else {
    footer.classList.remove("active");
  }
    
})


const navMenu = document.querySelector(".header .container i.bx-menu")
const navClose = document.querySelector(".header .container i.bx-x")
const navLinks = document.querySelector(".header .container ul")
let navContainer = document.querySelector(".header .container")
const before = window.getComputedStyle(navContainer, "::before")
console.log(before.display)


const navSlide = () => {
  if (screen.width < 1024){
    navMenu.addEventListener("click", () => {
      navMenu.style.display = "none";
      navClose.style.display = "block";
      navClose.style.color = "#fff";
      navLinks.style.display = "flex";
      navContainer.style.setProperty("--beforeDisplay", "block");
    });

    navClose.addEventListener("click", () => {
      navClose.style.display = "none";
      navMenu.style.display = "block";
      navLinks.style.display = "none";
      navContainer.style.setProperty("--beforeDisplay", "none");
    });
  }
}

navSlide()



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

