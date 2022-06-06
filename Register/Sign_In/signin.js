let showPass = document.querySelector("#rememberMe")
let inputName = document.querySelector(".name")
let inputEmail = document.querySelector(".email")
let inputPassword = document.querySelector(".password")
let btn = document.querySelector(".btn")

showPass.onclick = function() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text"
  } else {
    inputPassword.type = "password"
  }
}

btn.onclick = function() {
  if (localStorage.getItem("email") === inputEmail.value &&
    localStorage.getItem("password") === inputPassword.value) {
      window.location.href = "../../Menu/messinger.html"
  } else {
    alert("Invalid name or password,please Type a valid email and password.")
    inputEmail.value = ""
    inputPassword.value = ""
  }
}