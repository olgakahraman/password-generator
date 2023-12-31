const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.querySelector("#passwordBtn1");
let password2 = document.querySelector("#passwordBtn2");

let generateBtn = document.querySelector("#generatePasswordBtn");
let passwordLength = 15;
generateBtn.addEventListener("click", function () {
  password1.textContent = "";
  password2.textContent = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);

    password1.textContent += characters[randomIndex1];
    password2.textContent += characters[randomIndex2];
  }
});

toggleBtn.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (toggleBtn.classList.contains("toggled")) {
    toggleBtn.classList.remove("toggled");
    body.classList.add("light");
    lightenText.classList.remove("unselected");
    darkenText.classList.add("unselected");
  } else {
    toggleBtn.classList.add("toggled");
    body.classList.remove("light");
    lightenText.classList.add("unselected");
    darkenText.classList.remove("unselected");
  }
});
