let main = document.querySelector(".main")
let inputPassword = document.querySelector(".password")
let inputPasswordOne = document.querySelector(".passwordOne")
let btn = document.querySelector(".btn")

btn.onclick = function() {
  if (inputPassword.value === inputPasswordOne.value) {
    localStorage.setItem("password", inputPassword.value)
    window.location.href = "../Sign_In/signin.html"
  }
}