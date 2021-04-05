const cloudinary = require("cloudinary");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const Product = require("../models/Product.js");
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });
cloudinary.config({
  cloud_name: "mern-archer",
  api_key: "393523673758456",
  api_secret: "nHcLrhjETCAI0Ex51jE2aJ_TE8s",
});

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, config.get("secretKey"), { expiresIn: "24h" });
};

class ProductRouter {
  async createProduct(req, res) {
    try {
      const body = req.body;
      const files = req.files.file;
      console.log("files");
      console.log(files);

      let {
        productBrand,
        productName,
        productTitle,
        productDescription,
        productPrice,
        productTag,
      } = req.body;

      let info = [];

      if (files.length > 0) {
        console.log("stex 1");
        for (let i = 0; i < files.length; i++) {
          await cloudinary.v2.uploader.upload(
            files[i].tempFilePath,
            { folder: "nekoma" },
            async (err, result) => {
              if (err) throw err;
              removeTmp(files[i].tempFilePath);
              info.push({
                public_id: result.public_id,
                url: result.secure_url,
              });
            }
          );
        }
      } else {
        await cloudinary.v2.uploader.upload(
          files.tempFilePath,
          { folder: "nekoma" },
          async (err, result) => {
            if (err) throw err;
            removeTmp(files.tempFilePath);
            info.push({
              public_id: result.public_id,
              url: result.secure_url,
            });
          }
        );
      }

      const product = await Product.create({
        productBrand,
        productName,
        productTitle,
        productDescription,
        productPrice: parseInt(productPrice),
        productTag,
        productImage: info,
      });

      return res.status(200).json({ product });
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: `Registration error ${error}` });
    }
  }

  async getAllProduct(req, res) {
    try {
      console.log("getAllProduct");
      const products = await Product.find();
      res.status(200).json({ products });
    } catch (error) {
      console.log(error);
    }
  }
}

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = new ProductRouter();
