const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");
const AvatarFileService = require("../service/AvatarFileService");

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

      const { userName, lastName, email, password } = req.body;
      // const fileName = AvatarFileService.saveFile(req.files.avatar);

      const candidate = await User.findOne({ email });

      if (candidate) {
        res.status(400).json({ message: "User exists !!! " });
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });

      const user = await User.create({
        userName,
        lastName,
        email,
        password: hashPassword,
        // avatar: fileName ? fileName : "",
        products: [],
        roles: [userRole.value],
      });
      await user.save();

      console.log("registration");

      console.log(req.body);
      console.log(req.files.avatar);
      console.log(user);
      const token = generateAccessToken(user._id, "USER");
      return res.json({
        token,
        user: {
          id: user.id,
          userName: user.userName,
          lastName: user.lastName,
          email: user.email,
          userCart: user.products,
        },
      });
    } catch (e) {
      res.status(400).json({ msg: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        console.log("STEX 1");
        return res.status(400).json({ message: `E-mail ${email} not found` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        console.log("STEX 2");
        return res.status(400).json({ message: `Wrong password entered` });
      }

      const token = generateAccessToken(user._id, "USER");
      return res.json({
        token,
        user: {
          id: user.id,
          userName: user.userName,
          lastName: user.lastName,
          email: user.email,
          userCart: user.products,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async auth(req, res) {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
        expiresIn: "1h",
      });

      return res.json({
        token,
        user: {
          id: user.id,
          userName: user.userName,
          lastName: user.lastName,
          email: user.email,
          userCart: user.products,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
