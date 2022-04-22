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
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

refs.increaseBtn.addEventListener("click", increaseValue);
refs.decreaseBtn.addEventListener("click", decreaseValue);
