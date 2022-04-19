const refs = {
  fontSizeController: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeController.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
