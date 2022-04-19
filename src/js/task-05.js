const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameOutput.textContent = "Anonymous";

refs.nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (refs.nameOutput.textContent = "Anonymous");
  }
  refs.nameOutput.textContent = event.currentTarget.value;
});
