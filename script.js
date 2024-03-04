let display = document.getElementById("display");
let btns = document.querySelectorAll(".btns");
let buttonarray = Array.from(btns);

let string = "";
buttonarray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerText === "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.innerText;
      display.value = string;
    }
  });
});
