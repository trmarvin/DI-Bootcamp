import RecipeCollection from "./model/RecipeCollection";
import RecipeItem from "./model/RecipeItem";
import RecipeTemplate from "./templates/RecipeTemplate";

const form = document.getElementById("recipeEntryForm") as HTMLFormElement | null;
const titleInput = document.getElementById("recipeTitle") as HTMLInputElement | null;
const ingredientsInput = document.getElementById("ingredients") as HTMLTextAreaElement | null;
const instructionsInput = document.getElementById("instructions") as HTMLTextAreaElement | null;
const container = document.getElementById("recipeContainer") as HTMLDivElement | null;
const clearBtn = document.getElementById("clearRecipesButton") as HTMLButtonElement | null;

if (!form || !titleInput || !ingredientsInput || !instructionsInput || !container || !clearBtn) {
  throw new Error("Missing required HTML elements (check IDs in index.html).");
}

const collection = new RecipeCollection();
const template = new RecipeTemplate(container, collection);

// initial render (in case localStorage already has recipes)
template.render();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const ingredients = ingredientsInput.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const instructions = instructionsInput.value.trim();

  if (!title || ingredients.length === 0 || !instructions) return;

  const recipe = new RecipeItem(Date.now(), title, ingredients, instructions);

  collection.addRecipe(recipe);
  template.render();

  form.reset();
});

clearBtn.addEventListener("click", () => {
  // If you don't have this method yet, add it (see below).
  collection.clearAll();
  template.render();
});