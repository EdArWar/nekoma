export const getBoundingRectAfterRotation = (rect, angle) => {
  const newWidth =
    rect.width * Math.abs(Math.cos(angle)) +
    rect.height * Math.abs(Math.sin(angle));

  const newHeight =
    rect.height * Math.abs(Math.cos(angle)) +
    rect.width * Math.abs(Math.sin(angle));

  const newX = rect.x + (rect.width - newWidth) / 2;
  const newY = rect.y + (rect.height - newHeight) / 2;

  return {
    width: newWidth,
    height: newHeight,
    x: newX,
    y: newY,
  };
};
