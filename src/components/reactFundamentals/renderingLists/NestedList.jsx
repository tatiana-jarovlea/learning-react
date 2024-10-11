// Task 2 - Nested lists in one component

import { recipes } from '../data.js'

export const NestedRecipeList = () => {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2> {recipe.name} </h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}> {ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

