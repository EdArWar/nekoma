/* eslint-disable */

/* *
 * NODE.JS FILE
 * This file generates pixi assets data
 * */

const fs = require('fs');
const fileFinder = require('./fileFinder.script');

(async () => {
  console.time('===== generating pixiAssets data =====');

  const pixiFiles = await fileFinder.getFilesFromPath(
    __dirname + '/../../public/'
  );

  if (pixiFiles && pixiFiles.length) {
    const pixiJsonFiles = [];
    const pixiImageFiles = [];

    pixiFiles.forEach((pixiFile) => {
      if (pixiFile.includes('.json') && !pixiFile.includes('manifest')) {
        const spineVarName = pixiFile.replace('.json', '').replace(/-/g, '_');
        pixiJsonFiles.push({
          id: spineVarName,
          fileName: pixiFile,
        });
      } else if (pixiFile.includes('images/')) {
        // const splitted = pixiFile
        //   .replace(/.png|.jpeg|.jpg|.svg/g, '')
        //   .replace(/-/g, '_')
        //   .split('/');

        pixiImageFiles.push({
          id: pixiFile,
          fileName: pixiFile,
        });
      }
    });

    if (pixiJsonFiles.length) {
      await fs.writeFileSync(
        __dirname + '/../assets/pixi.spines.json',
        JSON.stringify(pixiJsonFiles, null, 4)
      );
    }

    if (pixiImageFiles.length) {
      await fs.writeFileSync(
        __dirname + '/../assets/pixi.images.json',
        JSON.stringify(pixiImageFiles, null, 4)
      );
    }
  }

  console.timeEnd('===== generating pixiAssets data =====');
})();
