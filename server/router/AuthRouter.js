const Router = require("express");

const AuthController = require("../controller/AuthController.js");
const { check } = require("express-validator");

const router = new Router();

router.post(
  "/registration",
  [
    check("usermail", "Incorrect email").isEmail(),
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "Password must be more than 4 and less than 10 characters"
    ).isLength({ min: 4, max: 10 }),
  ],
  AuthController.registration
);

module.exports = router;
