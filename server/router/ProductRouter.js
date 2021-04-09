const Router = require("express");
const ProductController = require("../controller/ProductController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = new Router();

// router.post("/create", authMiddleware, ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.post("/create", ProductController.createProduct);
router.post("/addCart", ProductController.addCart);

// router.post("/role", AuthController.createRole);

module.exports = router;
