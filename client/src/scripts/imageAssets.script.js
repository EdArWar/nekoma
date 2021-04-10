/* eslint-disable */

/* *
 * NODE.JS FILE
 * This file generates image exports
 * */

const fs = require("fs");
const fileFinder = require("./fileFinder.script");

(async () => {
  console.time("===== generating imageAssets exports =====");

  const imageFiles = await fileFinder.getFilesFromPath(
    __dirname + "/../assets/images/"
  );

  if (imageFiles && imageFiles.length) {
    let imageAssetsFileContent = "";
    imageFiles.forEach((imageFile) => {
      const splitted = imageFile
        .replace(/.png|.jpeg|.jpg|.gif|.svg/g, "")
        .replace(/-/g, "_")
        .split("/");

      const imageVarName = splitted[splitted.length - 1];

      imageAssetsFileContent += `export { default as ${imageVarName} } from './images/${imageFile}';\n`;
    });

    if (imageAssetsFileContent) {
      await fs.writeFileSync(
        __dirname + "/../assets/image.assets.js",
        imageAssetsFileContent
      );
    }
  }

  console.timeEnd("===== generating imageAssets exports =====");
})();
