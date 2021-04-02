class AuthController {
  async registration(req, res) {
    try {
      res.status(200).json({ msg: "WORKED !!!" });
    } catch (e) {
      res.status(400).json({ msg: "Registration error" });
    }
  }
}

module.exports = new AuthController();
