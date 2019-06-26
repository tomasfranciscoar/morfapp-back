const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/Recipe");
const Comment = require("../models/Comment");
const uploadCloud = require("../helpers/cloudinary-helper");
const authUtils = require("../helpers/auth-helper");

// add comment
recipeRouter.post("/comment", (req, res) => {
  Comment.create({ ...req.body })
    .then(comment => {
      res.status(200).json({ comment });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "There was an error posting your comment"
      });
    });
});

// get comments for recipe
recipeRouter.get("/comment/:id", (req, res) => {
  const { id } = req.params;
  Comment.find({ recipe: id })
    .populate("author")
    .then(comments => {
      res.status(200).json({ comments });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "An error occurred while retrieving the comments"
      });
    });
});

// create new recipe
recipeRouter.post("/new", uploadCloud.single("images"), (req, res) => {
  const images = req.file.secure_url;
  Recipe.create({ ...req.body, images })
    .then(recipe => {
      res.status(200).json({ recipe });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "An error occurred while uploading the recipe"
      });
    });
});

// get custom recipes
recipeRouter.get("/", (req, res) => {
  Recipe.find()
    .then(recipe => {
      res.status(200).json({ recipe });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "An error occurred while retrieving the recipes"
      });
    });
});

// get unique custom recipes
recipeRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipe.findById(id)
    .then(recipe => {
      res.status(200).json({ recipe });
    })
    .catch(error => {
      res.status(404).json({
        error,
        message: "An error occurred while retrieving the recipe"
      });
    });
});

// get my custom recipes
recipeRouter.get("/myrecipes/:id", (req, res) => {
  const { id } = req.params;
  Recipe.find({ author: id })
    .then(recipes => {
      res.status(200).json({ recipes });
    })
    .catch(error => {
      res.status(404).json({
        error,
        message: "An error occure while retrieving your recipes"
      });
    });
});

// update recipe
recipeRouter.patch("/:id", (req, res) => {
  const { id } = req.params;
  Recipe.findOneAndUpdate({ _id: id }, { $set: { ...req.body } }, { new: true })
    .then(recipe => {
      res.status(200).json({ recipe });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "There was an error editing the recipe"
      });
    });
});

// delete recipe
recipeRouter.delete("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;
  // const { _id: author } = req.user;

  Recipe.findOneAndRemove({ _id: id /*, author*/ })
    .then(recipe => {
      res.status(200).json({ recipe });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "There was an error deleting the recipe"
      });
    });
});

module.exports = recipeRouter;