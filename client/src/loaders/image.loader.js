import EventEmitter from 'eventemitter3';

import loadersEnum from '../enums/loaders.enum';

import * as imageFiles from '../assets/image.assets';

class ImageLoader {
  constructor() {
    this.images = {};
    this.emitter = new EventEmitter();
  }

  loadImages() {
    this.loadedImages = 0;

    const totalFiles = Object.keys(imageFiles).length;

    for (const file in imageFiles) {
      this.loadImage(
        {
          id: file,
          src: imageFiles[file],
        },
        totalFiles
      );
    }
  }

  loadImage(data, totalFiles) {
    if (data.id && data.src) {
      this.images[data.id] = new Image();
      this.images[data.id].src = data.src;

      this.images[data.id].onload = () => {
        this.loadedImages++;
        this.emitter.emit(loadersEnum.IMAGE_LOAD_PROGRESS, {
          progress: (this.loadedImages / totalFiles) * 100,
        });
      };
    }
  }

  getImage(imageId) {
    return this.images[imageId] && this.images[imageId].src;
  }
}

export default new ImageLoader();
