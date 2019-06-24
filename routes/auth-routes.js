const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uploadCloud = require("../helpers/cloudinary-helper");

const User = require("../models/User");

authRouter.post("/signup", (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
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
        message: "There was an error creating your user"
      });
    });
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(404).json({
        error: {},
        message: "Incorrect e-mail"
      });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({
        error: {},
        message: "Incorrect password"
      });
    }
    console.log("el req punto user: ", req.user);
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

authRouter.patch("/profile/:id", uploadCloud.single("profilePicture"), (req, res) => {
  const { id } = req.params;
  console.log('el req file: ', req.file)
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
});

module.exports = authRouter;
