const categoriesList = document.querySelector("#categories");
const categoriesListItems = document.querySelectorAll(".item");

const categoriesLogger = (listItems) => {
  listItems.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};

console.log(`Number of categories: ${categoriesList.children.length}`);
categoriesLogger(categoriesListItems);
