const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/Recipe");

recipeRouter.post("/new", (req, res) => {
  // const {_id: author} = req.user;
  Recipe.create({ ...req.body/*, author */ })
  .then(recipe => {
    res.status(200).json({recipe})
  })
  .catch(error => {
    res.status(500).json({
      error,
      message: "An error occurred while uploading the recipe"
    })
  })
});



module.exports = recipeRouter;