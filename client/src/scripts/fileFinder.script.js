/* eslint-disable */

const { promises } = require('fs');
const fs = promises;

class FileFinder {
  async isDirectory(path) {
    try {
      return (await fs.lstat(path)).isDirectory();
    } catch (e) {
      return false;
    }
  }

  async getFilesFromPath(path) {
    let files = [];
    const filesInPath = await fs.readdir(path);

    if (filesInPath && filesInPath.length) {
      for (const fileOrFolder of filesInPath) {
        if (fileOrFolder.includes('.DS_Store')) {
          continue;
        }

        const joinedPath = path + '/' + fileOrFolder;

        if (await this.isDirectory(joinedPath)) {
          const filesInDir = await this.getFilesFromPath(joinedPath);
          filesInDir.forEach((fileInDir, index) => {
            filesInDir[index] = fileOrFolder + '/' + fileInDir;
          });

          files = files.concat(filesInDir);
        } else {
          files.push(fileOrFolder);
        }
      }
    }

    return files;
  }
}

module.exports = new FileFinder();
