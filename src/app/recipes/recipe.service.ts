import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    new Recipe('Tasty Schitzel', 'A super-tasty Schitzel', 'https://goo.gl/6gxeoU',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French Frires', 20)
    ]),
    new Recipe('Big Fat Burger', 'This simply a Burger', 'https://goo.gl/5Wk99L',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    
}