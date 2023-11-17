// HTML elements
const addIngredientButton = document.getElementById("add-ingredient");
const ingredientContainer = document.getElementById("ingredient-container");
const ingredientCollection = document.getElementById("ingredient-collection");
const findRecipeButton = document.getElementById("find-recipe");

// Retrieve stored ingredients from localStorage and display them
const storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
storedIngredients.forEach(ingredientValue => {
  createIngredientElement(ingredientValue);
});

// Event listener for "Add Ingredient" button
addIngredientButton.addEventListener("click", function() {
  const inputField = document.getElementById("ingredient-input");
  const ingredientValue = inputField.value.trim();

  if (ingredientValue !== "") {
    createIngredientElement(ingredientValue);

    // Store the ingredient in localStorage
    storedIngredients.push(ingredientValue);
    localStorage.setItem("ingredients", JSON.stringify(storedIngredients));

    // Clear the input field
    inputField.value = "";
  }
});

// Event listener for "Find Recipe" button
findRecipeButton.addEventListener("click", function () {
  const ingredients = Array.from(document.querySelectorAll("#ingredient-collection div"))
    .map(ingredientItem => {
      let ingredientText = ingredientItem.textContent.trim();

      // Remove the "X" text if it's present
      const removeButtonText = "X";
      if (ingredientText.endsWith(removeButtonText)) {
        ingredientText = ingredientText.slice(0, -removeButtonText.length).trim();
      }

      return ingredientText;
    });

  // Log the ingredients array before constructing the searchParams
  console.log('Ingredients Array:', ingredients);

  // Construct the searchParams based on the ingredients array
  const searchQuery = ingredients.join('+');
  const apiEndpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=333df3a7&app_key=b5a28474569e162df635ca9862885186`;

  // Log the API endpoint before making the request
  console.log('API Endpoint:', apiEndpoint);

  // Display a loading message or spinner while waiting for the response
  const recipeResults = document.getElementById("recipe-results");
  recipeResults.textContent = 'Loading...';

  fetch(apiEndpoint, {
    method: 'GET', // Change this to 'GET' if you are fetching data
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // Log the full response data to understand its structure
      console.log('API Response:', data);

      // Store the results in local storage
      localStorage.setItem("recipeResults", JSON.stringify(data));

// Process and display the recipe results
recipeResults.innerHTML = '';

// Process and display the recipe results
recipeResults.innerHTML = '';

if (data.hits && data.hits.length > 0) {
  data.hits.forEach(hit => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("card", "mb-3", "col-md-3"); // Reduced size by 25% (col-md-3)
    recipeCard.style.marginRight = "10px"; // Adding right margin to create space between cards

    const imageElement = document.createElement("img");
    imageElement.classList.add("card-img-top");
    imageElement.style.width = "100%";
    imageElement.style.height = "150px"; // Adjusted height for smaller cards
    imageElement.src = hit.recipe.image;
    imageElement.alt = hit.recipe.label + " image";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.textContent = hit.recipe.label;

    const labelContainer = document.createElement("div");

    const cuisineLabel = document.createElement("span");
    cuisineLabel.classList.add("badge", "bg-secondary", "me-1");
    cuisineLabel.textContent = hit.recipe.cuisineType ? hit.recipe.cuisineType : '';

    labelContainer.appendChild(cuisineLabel);

    const btnElement = document.createElement("button");
    btnElement.classList.add("btn", "btn-outline-dark", "mt-3", "mx-auto", "d-block"); // Center button (mt-3, mx-auto, d-block)
    btnElement.textContent = "Open Recipe";
    btnElement.addEventListener("click", function () {
      window.open(hit.recipe.url, "_blank");
    });

    cardBody.appendChild(titleElement);
    cardBody.appendChild(labelContainer); // Add cuisine type label
    cardBody.appendChild(btnElement);

    recipeCard.appendChild(imageElement);
    recipeCard.appendChild(cardBody);

    recipeResults.appendChild(recipeCard);
  });
} else {
  recipeResults.textContent = "No recipes found with these ingredients.";
}

    })
    .catch(error => {
      console.error(error);
      // Display an error message in case of an error
      recipeResults.textContent = 'Error fetching recipes.';
    });
});

function createIngredientElement(ingredientValue) {
  const ingredientItem = document.createElement("div");
  ingredientItem.textContent = ingredientValue;
  ingredientItem.style.border = "1px solid black"; // Border around each ingredient
  ingredientItem.style.padding = "8px"; // Padding inside each ingredient
  ingredientItem.style.margin = "4px"; // Adjust margin between ingredients

  ingredientCollection.appendChild(ingredientItem);

  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<span class="fas fa-times fa-xs">X</span>';
  removeButton.style.marginLeft = "8px"; // Padding between remove button and text

  ingredientItem.appendChild(removeButton);

  removeButton.addEventListener("click", function() {
    ingredientCollection.removeChild(ingredientItem);
    // Remove the ingredient from storedIngredients and update localStorage
    const index = storedIngredients.indexOf(ingredientValue);
    if (index > -1) {
      storedIngredients.splice(index, 1);
      localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
    }

    // Check if ingredientCollection is empty and toggle visibility
    toggleVisibility();
  });

  // Get the number of child elements (ingredients)
  const ingredientCount = ingredientCollection.childElementCount;

  // Set flexbox display to create a grid-like layout
  ingredientCollection.style.display = "flex";
  ingredientCollection.style.flexWrap = "wrap";

  // Adjust width to accommodate three items per row
  const widthPercentage = 100 / 3;
  ingredientItem.style.width = `calc(${widthPercentage}% - 8px)`; // Subtracting margin and border

  // After every third ingredient, create a new line
  if (ingredientCount % 3 === 0) {
    ingredientItem.style.clear = "left";
  }

  // Check if ingredientCollection is empty and toggle visibility
  toggleVisibility();
}

// Function to toggle visibility of ingredientCollection
function toggleVisibility() {
  const ingredientCount = ingredientCollection.childElementCount;
  if (ingredientCount === 0) {
    ingredientCollection.style.display = "none";
  } else {
    ingredientCollection.style.display = "flex";
  }
}

// Trigger 'Add Ingredient' function on 'Enter' key press
document.getElementById("ingredient-input").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const inputField = document.getElementById("ingredient-input");
    const ingredientValue = inputField.value.trim();
  
    if (ingredientValue !== "") {
      createIngredientElement(ingredientValue);
  
      // Store the ingredient in localStorage
      storedIngredients.push(ingredientValue);
      localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
  
      // Clear the input field
      inputField.value = "";
    }
  }
});