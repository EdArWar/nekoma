class LoadProgressHelper {
  constructor(totalProgress) {
    this.totalProgress = totalProgress;
    this.dividedProgress = {};
  }

  calculateProgress(loadingProgress, id) {
    this.dividedProgress[id] = loadingProgress;

    const totalLoadedProgress = this.getTotalLoadedProgress();

    return (totalLoadedProgress / this.totalProgress) * 100;
  }

  getTotalLoadedProgress() {
    return Object.values(this.dividedProgress).reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
}

export default LoadProgressHelper;
