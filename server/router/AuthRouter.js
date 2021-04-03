const Router = require("express");
const AuthController = require("../controller/AuthController.js");
const { check } = require("express-validator");

const router = new Router();

router.post(
  "/registration",
  [
    check("email", "Incorrect email").isEmail(),
    check("userName", "Username cannot be empty").notEmpty(),
    check("lastName", "LastName cannot be empty").notEmpty(),
    check("age", "Age cannot be empty").notEmpty(),
    check(
      "password",
      "Password must be more than 4 and less than 10 characters"
    ).isLength({ min: 4, max: 10 }),
  ],
  AuthController.registration
);

// router.post("/role", AuthController.createRole);

module.exports = router;
