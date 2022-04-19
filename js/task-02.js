const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsListMarkup = ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  ingredientsListRef.append(listItem);
});

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
