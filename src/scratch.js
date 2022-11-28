/* eslint-disable */
function isTriangle(a, b, c) {
  const sides = [...arguments].sort((x, y) => y - x);
  console.log(sides);
  if (sides[1] ** 2 + sides[2] ** 2 > sides[0] ** 2) return false;
  return true;
}
console.log(isTriangle(3, 4, 5));
