function addDelay(mill) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, mill);
  });
}

export { addDelay };
