/* eslint-disable */

/* *
 * NODE.JS FILE
 * This file generates audio exports
 * */

const fs = require('fs');
const fileFinder = require('./fileFinder.script');

(async () => {
  console.time('===== generating audioAssets exports =====');

  const audioFiles = await fileFinder.getFilesFromPath(
    __dirname + '/../assets/audio/'
  );

  if (audioFiles && audioFiles.length) {
    let audioAssetsFileContent = '';
    audioFiles.forEach((audioFile) => {
      const splitted = audioFile
        .replace('.ogg', '')
        .replace(/-/g, '_')
        .split('/');

      const audioVarName = splitted[splitted.length - 1];
      audioAssetsFileContent += `export { default as ${audioVarName} } from './audio/${audioFile}';\n`;
    });

    if (audioAssetsFileContent) {
      await fs.writeFileSync(
        __dirname + '/../assets/audio.assets.js',
        audioAssetsFileContent
      );
    }
  }

  console.timeEnd('===== generating audioAssets exports =====');
})();
