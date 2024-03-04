let popup = document.querySelector("#popup")
let close = document.querySelector("#close")

close.addEventListener('click', () => {
    popup.style.display = 'none';
})



// if (5 > 6) {
//     console.log("5 is the greatest")
// } else {
//     console.log("5 is not the greatest")
// }

// var num1 = 17
// var num2 = 12

// if (num1 > num2) {
//     console.log("num1 is greater than num2")
//     console.log(num1 + " is greater than " + num2)
// } else {
//     console.log("num2 is greater than num2")
//     console.log(num2 + " is greater than " + num1)
// }


// var message = "How are you? "

// if (message == "hi") {
//     console.log("hello")
// } else if (message == "I am fine") {
//     console.log("I am fine too")
// } else if (message == "I need your help") {
//     console.log("I no dey help")
// } else {
//     console.log("I don't understand you")
// }


var level = "JSS3"
var age = 19
var grade = 80

// if (level == "JSS1") {
//     if (age <= 18) {
//         if (grade >= 70) {
//             console.log("You are eligible to apply")
//         } else {
//             console.log("Your grade is below the pass mark")
//         }
//     } else {
//         console.log("Your age is not allowed to apply")
//     }
// } else {
//     console.log("Your level is not allowed")
// }

if (level == "JSS1" && age <= 18 && grade >= 70) {
    console.log("You are allowed")
} else {
    console.log("Your level, age or grade is not allowed")
}


// Assignment
// write a program that checks the username and password of a user 
var username = "Uche"
var password = "mynameisuche"

if (username === "Uche") {
    if (password === "mynameisuche") {
        console.log("You're successfully logged in")
    } else {
        console.log("Username or password incorrect")
    }
}

if (username === "Uche" && password === "mynameisuche") {
    console.log("You're successfully logged in")
} else {
    console.log("Username or password incorrect")
}