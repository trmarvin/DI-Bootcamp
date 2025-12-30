import RecipeCollection from "../model/RecipeCollection";
import RecipeItem from "../model/RecipeItem";

class RecipeTemplate {
  private container: HTMLElement;
  private collection: RecipeCollection;

  constructor(container: HTMLElement, collection: RecipeCollection) {
    this.container = container;
    this.collection = collection;

    // Event delegation: one listener for all card buttons
    this.container.addEventListener("click", this.handleClick);

    this.render();
  }

  /** Render the full list */
  render(): void {
    const recipes = this.collection.getAll();
    this.container.innerHTML = recipes.map(this.renderCard).join("");
  }

  /** Card HTML */
  private renderCard = (recipe: RecipeItem): string => {
    const ingredientsHtml = recipe.ingredients
      .map((ing) => `<li>${this.escapeHtml(ing)}</li>`)
      .join("");

    return `
      <article class="recipe-card" data-id="${recipe.id}">
        <header class="recipe-card__header">
          <h3 class="recipe-card__title">${this.escapeHtml(recipe.title)}</h3>

          <div class="recipe-card__actions">
            <button
              class="btn btn-favorite"
              data-action="toggle-favorite"
              aria-pressed="${recipe.isFavorite}"
              title="${recipe.isFavorite ? "Unfavorite" : "Favorite"}"
            >
              ${recipe.isFavorite ? "★" : "☆"}
            </button>

            <button
              class="btn btn-toggle"
              data-action="toggle-details"
              aria-expanded="false"
              title="Show/Hide details"
            >
              Details
            </button>

            <button
              class="btn btn-delete"
              data-action="delete"
              title="Delete recipe"
            >
              Delete
            </button>
          </div>
        </header>

        <section class="recipe-card__details" hidden>
          <h4>Ingredients</h4>
          <ul>${ingredientsHtml}</ul>

          <h4>Instructions</h4>
          <p>${this.escapeHtml(recipe.instructions)}</p>
        </section>
      </article>
    `;
  };

  /** Handle all clicks inside container */
  private handleClick = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    const button = target.closest("button[data-action]") as HTMLButtonElement | null;
    if (!button) return;

    const action = button.dataset.action;
    const card = button.closest<HTMLElement>(".recipe-card");
    if (!card) return;

    const id = Number(card.dataset.id);
    if (Number.isNaN(id)) return;

    switch (action) {
      case "toggle-favorite":
        this.collection.toggleFavorite(id);
        this.render();
        break;

      case "delete":
        this.collection.removeRecipe(id);
        this.render();
        break;

      case "toggle-details":
        this.toggleDetails(card, button);
        break;

      default:
        // Graceful no-op for unknown actions
        break;
    }
  };

  /** Show/hide details section within one card */
  private toggleDetails(card: HTMLElement, button: HTMLButtonElement): void {
    const details = card.querySelector<HTMLElement>(".recipe-card__details");
    if (!details) return;

    const isHidden = details.hasAttribute("hidden");

    if (isHidden) {
      details.removeAttribute("hidden");
      button.setAttribute("aria-expanded", "true");
      button.textContent = "Hide";
    } else {
      details.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Details";
    }
  }

  /** Basic HTML escaping to avoid injecting user content into the DOM */
  private escapeHtml(text: string): string {
    return text.replace(/[&<>"']/g, (ch) => {
      switch (ch) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#039;";
        default:
          return ch;
      }
    });
  }
}

export default RecipeTemplate;