const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./database/chefs.json");
const recipes = require("./database/recipes.json");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running yeah");
});

// Chefs:
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes/chef/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const chef = chefs.find((n) => n.id === id);
  res.send(chef);
});

// Recipes:
app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/recipes/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  console.log(name);
  const filteredRecipes = recipes.filter((item) => item.chef.toLowerCase() === name);
  res.send(filteredRecipes);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
