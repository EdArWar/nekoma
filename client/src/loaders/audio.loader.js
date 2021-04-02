import EventEmitter from 'eventemitter3';

import loadersEnum from '../enums/loaders.enum';

import * as audioFiles from '../assets/audio.assets';

class AudioLoader {
  constructor() {
    this.audios = {};
    this.emitter = new EventEmitter();
  }

  loadAudios() {
    this.loadedAudios = 0;

    const totalFiles = Object.keys(audioFiles).length;

    for (const file in audioFiles) {
      this.loadAudio(
        {
          id: file,
          src: audioFiles[file],
        },
        totalFiles
      );
    }
  }

  loadAudio(data, totalFiles) {
    if (data.id && data.src) {
      this.audios[data.id] = new Audio(data.src);

      this.audios[data.id].addEventListener(
        'canplaythrough',
        () => {
          this.loadedAudios++;

          this.emitter.emit(loadersEnum.AUDIO_LOAD_PROGRESS, {
            progress: (this.loadedAudios / totalFiles) * 100,
          });
        },
        false
      );
    }
  }

  play(audioId) {
    // eslint-disable-next-line no-unused-expressions
    this.audios[audioId] && this.audios[audioId].play();
  }
}

export default new AudioLoader();
