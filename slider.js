let btnLesser = document.getElementsByClassName("button-lessthan");
let btnGreater = document.getElementsByClassName("button-greaterthan");
let image = document.getElementById("image");

let listOfImages = [
  "bram",
  "elephant",
  "garuda",
  "garudavahanam",
  "kalpa",
  "roads",
  "temple",
];
let length = 0;

btnLesser[0].addEventListener("click", function () {
  btnGreater[0].removeAttribute("hidden");
  if (length > 0) {
    image.src = `./images/${listOfImages[length - 1]}.jpg`;
    image.classList.add("animate__animated", "animate__hinge");
    setTimeout(() => {
      image.classList.remove("animate__animated", "animate__hinge");
    }, 1000);
    length--;
  } else {
    btnLesser[0].setAttribute("hidden", true);
  }
});

btnGreater[0].addEventListener("click", function () {
  btnLesser[0].removeAttribute("hidden");
  if (length < listOfImages.length - 1) {
    image.src = `./images/${listOfImages[length + 1]}.jpg`;
    image.classList.add("animate__animated", "animate__flip");
    setTimeout(() => {
      image.classList.remove("animate__animated", "animate__flip");
    }, 1000);
    length++;
  } else {
    btnGreater[0].setAttribute("hidden", true);
  }
});
