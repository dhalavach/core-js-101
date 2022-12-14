/* eslint-disable */
// const res = (x) => args[0] * x ** 2 + args[1] * x + args[2];

// function retry(func, attempts) {
//   func();
//   return attempts === 1 ? '' : retry(func, attempts - 1);
// }

// function retry(func, attempts) {
//   try {
//     return func();
//   } catch (err) {
//     return function repeat() {
//       let n = 0;
//       while (attempts > n) {
//         console.log('safsafafasfsadfsa');
//         func();
//         n += 1;
//       }
//     };
//   }
// }

function retry(func, attempts) {
  try {
    func();
    return func;
  } catch (err) {
    if (attempts === 1) throw err;
    return retry(func, attempts - 1);
  }
}

function log() {
  console.log('qwerty');
}
function throwErr() {
  throw new Error('test error 2');
}

console.log(retry(log, 5));
