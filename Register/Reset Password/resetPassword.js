let main = document.querySelector(".main")
let inputEmail = document.querySelector(".email")
let btn = document.querySelector(".btn")

btn.onclick = function() {
  if (localStorage.getItem("email") === inputEmail.value) {
    window.location.href = "../Reset Password Two/resetPassTwo.html"
  } else {
    alert("Invalid E-mail,Please Type A valid E-mail")
  }
}