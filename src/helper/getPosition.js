export const getCameraPositionFromLookAtCoordinates = (x, y, z) => {
  let newX = x,
    newY = y,
    newZ = z;
  while (Math.abs(newX) >= 10 || Math.abs(newY) >= 10 || Math.abs(newZ) >= 10) {
    newX = newX / 2;
    newY = newY / 2;
    newZ = newZ / 2;
  }
  return {
    x: -1 * newX,
    y: -1 * newY,
    z: -1 * newZ,
  };
};
