const express = require("express");
const authModel = require("../models/auth");

const router = express.Router();

router.post("/sign-up", (req, res) => {
  authModel
    .create(req.body)
    .then((user) => {
      res.json({
        results: user,
        message: "Account created successfull",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  authModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          userID: user._id,
          Token: "done",
          message: "Account login successfully",
        });
      } else {
        res.json({
          Token: "",
          message: "The password is incorrect",
        });
      }
    } else {
      res.json({
        Token: "",
        message: "No user found",
      });
    }
  });
});

module.exports = router;
