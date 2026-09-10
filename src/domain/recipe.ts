export class Recipe {
  _name!: string;
  _category?: string;
  _description?: string;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(aDescription: string) {
    // Estas validaciones son opcionales
    const trimmed = aDescription.trim();
    if (trimmed.length === 0) {
      throw new Error("La descripción de la receta no puede ser vacía.");
    }
    // Poniendo únicamente this._description = aDescription; sería suficiente
    this._description = trimmed;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripción: ${this.description}`;
  }
}
