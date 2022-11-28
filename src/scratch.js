/* eslint-disable */

function isInsideCircle(circle, point) {
  if (circle.radius === 0) return false;
  /* prettier-ignore */
  if (point.x < circle.center.x
    || point.x >= circle.center.x + circle.radius) {
    return false;
  }
  /* prettier-ignore */
  if (point.y < circle.center.y
    || point.y >= circle.center.y + circle.radius) {
    return false;
  }
  return true;
}

console.log(
  isInsideCircle({ center: { x: 0, y: 0 }, radius: 10 }, { x: 0, y: 10 })
);
