const { Schema, model } = require("mongoose");

const Users = new Schema({
  userName: { type: String, unique: true, required: true },
  lastName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  roles: [{ type: String, ref: "Role" }],
  products: {
    type: Array,
    default: [],
  },
});

module.exports = model("Users", Users);
