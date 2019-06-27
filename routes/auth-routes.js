const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uploadCloud = require("../helpers/cloudinary-helper");
const authUtils = require("../helpers/auth-helper");

const User = require("../models/User");

authRouter.post("/signup", (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  if(req.body.password.length < 8){
    return res.status(400).json({
      error: {},
      message: "Your password is not long enough."
    })
  };
  User.create({ ...req.body, password: hashedPassword })
    .then(user => {
      req.user = user;
      jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 86400 },
        (err, token) => {
          delete user._doc.password;
          res.status(200).json({ token, user });
        }
      );
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "There was an error creating your user."
      });
    });
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(404).json({
        error: {},
        message: "Incorrect username"
      });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({
        error: {},
        message: "Incorrect password"
      });
    }
    
    jwt.sign(
      { id: user._id },
      process.env.SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        delete user._doc.password;
        res.status(200).json({ token, user });
      }
    );
  });
});

authRouter.get("/profile/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;
  User.findById(id).populate("favs")
    .then(profile => {
      res.status(200).json({ profile });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error retrieving your profile"
      });
    });
});

authRouter.patch(
  "/profile/:id",
  authUtils.verifyToken,
  uploadCloud.single("profilePicture"),
  (req, res) => {
    const { id } = req.params;
    const profilePicture = req.file.secure_url;
    User.findOneAndUpdate({ _id: id }, { $set: req.body, profilePicture })
      .then(profile => {
        res.status(200).json({ profile });
      })
      .catch(error => {
        res.status(500).json({
          error,
          message: "There was an error editing your profile"
        });
      });
  }
);

authRouter.patch("/profile/favs/:id", (req, res) => {
  const userId = req.body.favs;
  const { id } = req.params;
  console.log('el userid: ', userId, 'y el recipeid: ', id)
  User.findOneAndUpdate({ _id: userId }, { $push: {favs: id}})
    .then(profile => {
      res.status(200).json({profile})
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "There was an error setting your favourite"
      });
    });
});

module.exports = authRouter;
