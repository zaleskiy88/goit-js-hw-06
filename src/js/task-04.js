const refs = {
  value: document.querySelector("#value"),
  increaseBtn: document.querySelector('button[data-action="increment"]'),
  decreaseBtn: document.querySelector('button[data-action="decrement"]'),
};
let counterValue = 0;

const increaseValue = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};
const decreaseValue = () => {
  if (Number(refs.value.textContent) === 0) {
    return (refs.value.textContent = 0);
  }
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

refs.increaseBtn.addEventListener("click", increaseValue);
refs.decreaseBtn.addEventListener("click", decreaseValue);
