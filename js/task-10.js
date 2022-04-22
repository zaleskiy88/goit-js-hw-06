function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector("#boxes"),
  numberInput: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  detroyBtn: document.querySelector("button[data-destroy]"),
};

function createBoxes(amount) {
  let counter = 0;
  while (counter < amount) {
    counter += 1;
    const div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(div);
  }
}

refs.numberInput.addEventListener("change", (event) => {
  createBoxes(event.currentTarget.value);
  //console.log(Number(event.currentTarget.value));
});
