/* eslint-disable */
// const res = (x) => args[0] * x ** 2 + args[1] * x + args[2];

function getPolynom(...args) {
  const c1 = args[0];
  const c2 = args[1] || 0;
  const c3 = args[2] || 0;
  if (args.length === 1) return (x) => args[0];
  const res = (x) =>
    c1 * x ** (args.length - 1) + c2 * x ** (args.length - 2) + c3;
  return res;
}

console.log(getPolynom(8)(0));
