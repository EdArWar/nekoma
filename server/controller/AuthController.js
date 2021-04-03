const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, config.get("secretKey"), { expiresIn: "24h" });
};

class AuthController {
  // async createRole(req, res) {
  //   try {
  //     const userRole = new Role();
  //     const adminRole = new Role({ value: "ADMIN" });
  //     await userRole.save();
  //     await adminRole.save();
  //     res.json("Server Worked !!!");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }

      const { name, lastName, email, age, password, photo } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        res.status(400).json({ message: "User exists !!! " });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });

      const user = await User.create({
        name,
        lastName,
        email,
        age,
        password: hashPassword,
        products: [],
        roles: [userRole.value],
      });
      await user.save();
      const token = generateAccessToken(user._id, "USER");
      return res.json({
        token,
        user: {
          id: user.id,
          lastName: user.lastName,
          email: user.email,
          age: user.age,
          userCart: user.products,
        },
      });
    } catch (e) {
      res.status(400).json({ msg: "Registration error" });
    }
  }
}

module.exports = new AuthController();
