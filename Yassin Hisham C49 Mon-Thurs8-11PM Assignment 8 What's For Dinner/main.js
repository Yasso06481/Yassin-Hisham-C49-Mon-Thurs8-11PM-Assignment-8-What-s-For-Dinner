// Array of Recipe Objects
const recipes = [
  {
    title: "Teriyaki Chicken Bowl",
    desc: "Sweet and savory chicken over rice with vegetables",
    image: "photo-1509722747041-616f39b57569.jpg",
    rating: "4.7 (312 reviews)",
    difficulty: "Easy",
    cuisine: "Asian",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutrition: {
      Calories: "650 kcal",
      Protein: "38g",
      Carbohydrates: "42g",
      Fat: "35g",
      Fiber: "2g",
      Sodium: "920mg",
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    title: "Classic Beef Burger",
    desc: "Juicy homemade burger with all the fixings",
    image: "photo-1601050690597-df0568f70950.jpg",
    rating: "4.6 (421 reviews)",
    difficulty: "Easy",
    cuisine: "American",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    ingredients: [
      "300g ground beef (80/20 mix)",
      "2 brioche burger buns",
      "2 slices cheddar cheese",
      "Lettuce leaves & sliced tomatoes",
      "Pickles & burger sauce",
      "Salt and black pepper",
    ],
    instructions: [
      "Divide ground beef into two patties and season generously with salt and pepper.",
      "Heat a cast-iron skillet over high heat.",
      "Sear patties for 3-4 minutes per side until deeply browned.",
      "Place cheese on top during the last minute to melt.",
      "Toast brioche buns in butter.",
      "Assemble burgers with sauce, lettuce, tomato, patty, and pickles.",
    ],
    nutrition: {
      Calories: "680 kcal",
      Protein: "38g",
      Carbohydrates: "45g",
      Fat: "36g",
      Fiber: "3g",
      Sodium: "920mg",
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
];

let currentIndex = 0;

function renderRecipe(recipe) {
  document.getElementById("heroImage").style.backgroundImage =
    `url('${recipe.image}')`;
  document.getElementById("ratingText").textContent = recipe.rating;
  document.getElementById("prepTime").textContent = recipe.prepTime;
  document.getElementById("cookTime").textContent = recipe.cookTime;
  document.getElementById("servings").textContent = recipe.servings;

  document.getElementById("recipeTitle").textContent = recipe.title;
  document.getElementById("recipeDesc").textContent = recipe.desc;
  document.getElementById("badgeDifficulty").textContent = recipe.difficulty;
  document.getElementById("badgeCuisine").textContent = recipe.cuisine;

  const ingList = document.getElementById("ingredientsList");
  ingList.innerHTML = recipe.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("");

  const instList = document.getElementById("instructionsList");
  instList.innerHTML = recipe.instructions
    .map((step) => `<li>${step}</li>`)
    .join("");

  const nutritionGrid = document.getElementById("nutritionGrid");
  nutritionGrid.innerHTML = Object.entries(recipe.nutrition)
    .map(
      ([label, value]) => `
      <div class="col-6">
        <div class="nutrition-card d-flex justify-content-between align-items-center p-3" style="background-color: #f9fafb">
          <span class="nutrition-label">${label}</span>
          <span class="nutrition-value">${value}</span>
        </div>
      </div>
    `,
    )
    .join("");

  const tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = recipe.tips
    .map((tip) => `<div class="tip-card p-3">${tip}</div>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderRecipe(recipes[currentIndex]);

  document.getElementById("nextRecipeBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % recipes.length;
    renderRecipe(recipes[currentIndex]);
  });
});
