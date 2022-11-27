/* eslint-disable */

function angleBetweenClockHands(date) {
  const dt = new Date(date);
  const minutes = dt.getUTCMinutes();
  const hours = dt.getUTCHours() % 12 || 12;
  const minAngle = minutes * (360 / 60);
  const hourAngle = hours * (360 / 12) + minutes / 2;
  const degreesAngle = Math.abs(hourAngle - minAngle);
  const smallerAngle = Math.min(360 - degreesAngle, degreesAngle);

  return smallerAngle;
}

// function angleBetweenClockHands(date) {
//   const dt = new Date(date);

//   const pi2 = Math.PI * 2;
//   const m = dt.getUTCMinutes() / 60;
//   const h = (dt.getUTCHours() + m) / 12;

//   const angle = Math.abs(h - m) * pi2;
//   return Math.min(angle, pi2 - angle);
// }

const d1 = Date.UTC(2016, 3, 5, 3, 0);
const d2 = Date.UTC(2016, 3, 5, 15, 0);
const d3 = Date.UTC(2016, 3, 5, 9, 0);
const d4 = Date.UTC(2016, 3, 5, 21, 0);

console.log(angleBetweenClockHands(d1));
console.log(angleBetweenClockHands(d2));
console.log(angleBetweenClockHands(d3));
console.log(angleBetweenClockHands(d4));
console.log(d2.toString());
