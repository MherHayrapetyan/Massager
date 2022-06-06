let main = document.querySelector(".main")
let inputName = document.querySelector(".name")
let inputEmail = document.querySelector(".email")
let inputPassword = document.querySelector(".password")
let btn = document.querySelector(".btn")


localStorage.clear()
btn.onclick = function() {
  localStorage.setItem("login", inputName.value)
  localStorage.setItem("email", inputEmail.value)
  localStorage.setItem("password", inputPassword.value)

  inputName.value = ""
  inputEmail.value = ""
  inputPassword.value = ""

}