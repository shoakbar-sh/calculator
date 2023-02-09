"use strict";

son.addEventListener('keyup', (e) => {

   if (e.target.value.trim().length) {
      e.target.style.outline = "3px solid green";
   } else {
      e.target.style.outline = "3px solid red";
   }
})

user.addEventListener('keyup', (e) => {

   if (e.target.value.trim().length) {
      e.target.style.outline = "3px solid green";
   } else {
      e.target.style.outline = "3px solid red";
   }
})

odd.addEventListener('keyup', (e) => {

   if (e.target.value.trim().length) {
      e.target.style.outline = "3px solid green";
   } else {
      e.target.style.outline = "3px solid red";
   }
})

function calc() {
   let son = document.getElementById("son").value,
      user = document.getElementById("user").value,
      odd = document.getElementById("odd").value,
      chek = "";
   if (user == "+") {
      chek = son + odd;
   } else if (user == "/") {
      chek = son / odd;
   } else if (user == "*") {
      chek = son * odd;
   } else if (user == "-") {
      chek = son - odd;
   } else {
      alert("Xato")
   }
   document.getElementById("title").innerHTML = chek;
}