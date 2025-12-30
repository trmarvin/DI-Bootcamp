class RecipeItem {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;

  constructor(
    id: number,
    title: string,
    ingredients: string[],
    instructions: string,
    isFavorite: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.isFavorite = isFavorite;
  }
}

export default RecipeItem;