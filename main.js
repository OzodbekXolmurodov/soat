const time = document.querySelector(".time");
const hafta = document.querySelector("#hafta-kuni");
const month = document.querySelector("#oy-nomi");
const name2 = document.querySelector("#inson-ismi");

var promptName = prompt("Ismingis nima ?");

if (promptName !== "") {
  var p =
    promptName.charAt(0).toUpperCase() +
    promptName.slice(1).toLowerCase().trim();
} else {
  p = "Anonim";
}

name2.textContent = p;

function timeFunction() {
  let dote = new Date();
  let hour = dote.getHours().toString().padStart(2, "0");
  let minute = dote.getMinutes().toString().padStart(2, "0");
  let secound = dote.getSeconds().toString().padStart(2, "0");

  time.innerHTML = `${hour} : ${minute} : ${secound}`;
}
timeFunction();

setInterval(() => {
  timeFunction();
}, 1000);

var today = new Date();
var day = today.getDay();

var dayName;
switch (day) {
  case 0:
    dayName = "Yakshanba";
    break;
  case 1:
    dayName = "Dushanba";
    break;
  case 2:
    dayName = "Seshanba";
    break;
  case 3:
    dayName = "Chorshanba";
    break;
  case 4:
    dayName = "Payshanba";
    break;
  case 5:
    dayName = "Juma";
    break;
  case 6:
    dayName = "Shanba";
    break;
}

hafta.innerHTML = dayName;

var today = new Date();
var month2 = today.getMonth();

var monthName;
switch (month2) {
  case 0:
    monthName = "Yanvar";
    break;
  case 1:
    monthName = "Fevral";
    break;
  case 2:
    monthName = "Mart";
    break;
  case 3:
    monthName = "Aprel";
    break;
  case 4:
    monthName = "May";
    break;
  case 5:
    monthName = "Iyun";
    break;
  case 6:
    monthName = "Iyul";
    break;
  case 7:
    monthName = "Avgust";
    break;
  case 8:
    monthName = "Sentabr";
    break;
  case 9:
    monthName = "Oktabr";
    break;
  case 10:
    monthName = "Noyabr";
    break;
  case 11:
    monthName = "Dekabr";
    break;
}

month.innerHTML = monthName;
