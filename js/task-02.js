const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsListMarkup = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  return listItem;
});

ingredientsListRef.append(...ingredientsListMarkup);

//-----------------------------------------------------------------//
// const ingredientsListMarkupMaker = function (ingredientsArr) {
//   ingredientsArr.forEach((ingredient) => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("item");
//     listItem.textContent = ingredient;
//     ingredientsListRef.append(listItem);
//   });
// };

// ingredientsListMarkupMaker(ingredients);
//-----------------------------------------------------------------//
