const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const fileUpload = require("express-fileupload");
const corsMiddleware = require("./middleware/cors.middleware");
const authRouter = require("./router/AuthRouter");
const productRouter = require("./router/ProductRouter");

const cors = require("cors");

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(corsMiddleware);
app.use(express.static("static"));
app.use(express.static("static/avatar"));

app.use("/userAuth", authRouter);
app.use("/product", productRouter);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
async function startApp() {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is Started on ${PORT} PORT`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
