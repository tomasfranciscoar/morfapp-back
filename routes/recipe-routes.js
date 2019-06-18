const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/Recipe");
const uploadCloud = require("../helpers/cloudinary-helper");

recipeRouter.post("/new", uploadCloud.array("images"), (req, res) => {
  // const {_id: author} = req.user;
  console.log('el req.user: ', req.user)
  const images = req.files.map(file => file.secure_url)
  Recipe.create({ ...req.body/*, author */, images})
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