// HTML elements
const addIngredientButton = document.getElementById("add-ingredient");
const ingredientContainer = document.getElementById("ingredient-container");
const ingredientCollection = document.getElementById("ingredient-collection");
const findRecipeButton = document.getElementById("find-recipe");

// Retrieve stored ingredients from localStorage and display them
const storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
storedIngredients.forEach(ingredientValue => {
  const ingredientItem = document.createElement("div");
  ingredientItem.textContent = ingredientValue;
  ingredientCollection.appendChild(ingredientItem);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  ingredientItem.appendChild(removeButton);

  removeButton.addEventListener("click", function() {
    ingredientCollection.removeChild(ingredientItem);
    // Remove the ingredient from storedIngredients and update localStorage
    const index = storedIngredients.indexOf(ingredientValue);
    if (index > -1) {
      storedIngredients.splice(index, 1);
      localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
    }
  });
});

// Event listener for "Add Ingredient" button
addIngredientButton.addEventListener("click", function() {
  const inputField = document.getElementById("ingredient-input");
  const ingredientValue = inputField.value.trim();

  if (ingredientValue !== "") {
    // Create a new element to display the ingredient in the collection
    const ingredientItem = document.createElement("div");

    // Store the ingredient text content in a separate variable
    ingredientItem.textContent = ingredientValue;

    ingredientCollection.appendChild(ingredientItem);

    // Optionally, you can add a remove button to each ingredient item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    ingredientItem.appendChild(removeButton);

    removeButton.addEventListener("click", function() {
      ingredientCollection.removeChild(ingredientItem);
      // Remove the ingredient from storedIngredients and update localStorage
      const index = storedIngredients.indexOf(ingredientValue);
      if (index > -1) {
        storedIngredients.splice(index, 1);
        localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
      }
    });

    // Store the ingredient in localStorage
    storedIngredients.push(ingredientValue);
    localStorage.setItem("ingredients", JSON.stringify(storedIngredients));

    // Clear the input field
    inputField.value = "";
  }
});

// Event listener for "Find Recipe" button
findRecipeButton.addEventListener("click", function() {
  const ingredients = [];
  const ingredientItems = ingredientCollection.children;

  for (let i = 0; i < ingredientItems.length; i++) {
    const ingredientItem = ingredientItems[i];
    let ingredientText = ingredientItem.textContent.trim();

    // Remove the "Remove" text if it's present
    const removeButtonText = "Remove";
    if (ingredientText.endsWith(removeButtonText)) {
      ingredientText = ingredientText.slice(0, -removeButtonText.length).trim();
    }

    // Check if the ingredientText is not an empty string
    if (ingredientText) {
      ingredients.push(ingredientText);
    }
  }

  // Log the ingredients array before constructing the searchParams
  console.log('Ingredients Array:', ingredients);

  // Append the query parameters to the base URL
  const apiEndpoint = `http://localhost:3000/api/recipes?${searchParams.toString()}`;

  // Log the API endpoint before making the request
  console.log('API Endpoint:', apiEndpoint);

  fetch(apiEndpoint, {
    method: 'GET', // Change this to 'GET' if you are fetching data
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Process and display the recipe results
      const recipeResults = document.getElementById("recipe-results");
      recipeResults.innerHTML = '';

      if (data.recipes && data.recipes.length > 0) {
        data.recipes.forEach(recipe => {
          const recipeItem = document.createElement("div");
          for (const prop in recipe) {
            if (recipe.hasOwnProperty(prop)) {
              const recipeProperty = document.createElement("p");
              recipeProperty.textContent = `${prop}: ${recipe[prop]}`;
              recipeItem.appendChild(recipeProperty);
            }
          }
          recipeResults.appendChild(recipeItem);
        });
      } else {
        recipeResults.textContent = "No recipes found with these ingredients.";
      }
    })
    .catch(error => console.error(error));
});
