const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3000;

app.use(cors());

// Define API endpoints and handle recipe search
app.get('/api/recipes', async (req, res) => {
  const ingredients = req.query.ingredients;

  console.log('Received request to /api/recipes');
  console.log('Ingredients:', ingredients);

  if (!ingredients) {
    res.status(400).json({ error: 'Ingredients parameter is missing or empty' });
    return;
  }

  const ingredientList = ingredients.split(',');

  const apiEndpoint = process.env.RECIPE_API_ENDPOINT; // Define the variable here

  // Log the URL before making the request
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientList.join(',')}&app_id=${process.env.RECIPE_API_ID}&app_key=${process.env.RECIPE_API_KEY}`;
  console.log('API URL:', apiUrl);

  try {
    // Make a request to the Edamam API or another recipe API here
    // Example using Axios:
    const response = await axios.get(apiEndpoint, {
      params: {
        q: ingredientList.join(','),  // Ensure the parameter is a comma-separated string
        app_id: process.env.RECIPE_API_ID,
        app_key: process.env.RECIPE_API_KEY, // Use the environment variable directly
      },
    });

    const data = response.data;

    // Process and send the recipe data to the frontend
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
