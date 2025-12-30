import RecipeItem from "./RecipeItem";

class RecipeCollection {
  private recipes: RecipeItem[] = [];
  private storageKey = "recipes";

  constructor() {
    this.loadFromLocalStorage();
  }

  clearAll(): void {
  this.recipes = [];
  this.saveToLocalStorage();
}

  /* ---------- Getters ---------- */

  getAll(): RecipeItem[] {
    return this.recipes;
  }

  /* ---------- Mutations ---------- */

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  removeRecipe(id: number): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: number): void {
    const recipe = this.recipes.find(r => r.id === id);
    if (!recipe) return;

    recipe.isFavorite = !recipe.isFavorite;
    this.saveToLocalStorage();
  }

  /* ---------- Persistence ---------- */

  saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.recipes));
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return;

    const parsed = JSON.parse(data);

    // Rehydrate plain objects into RecipeItem instances
    this.recipes = parsed.map(
      (r: any) =>
        new RecipeItem(
          r.id,
          r.title,
          r.ingredients,
          r.instructions,
          r.isFavorite
        )
    );
  }
}

export default RecipeCollection;