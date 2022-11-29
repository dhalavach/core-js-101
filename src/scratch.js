/* eslint-disable */

// function isCreditCardNumber(ccn) {
//   let sum = 0;
//   const parity = ccn.toString().length % 2;
//   console.log(parity);
//   for (let i = 0; i <= ccn.toString().length - 1; i++) {
//     if (i % 2 === parity) {
//       sum = sum + Number(ccn.toString()[i]);
//     } else if (Number(ccn.toString()[i]) > 4) {
//       sum = sum + 2 * Number(ccn.toString()[i]) - 9;
//     } else {
//       sum = sum + 2 * Number(ccn.toString()[i]);
//     }
//   }
//   console.log(sum);
//   return sum % 10 === 0;
// }

function isCreditCardNumber(ccn) {
  const arr = ccn
    .toString()
    .split('')
    .reverse()
    .map((x) => parseInt(x));
  for (let i = arr.length - 1; i > 0; i-= 1) {
    if (i % 2 !== 0) {
      arr[i] *= 2;
      if (arr[i].toString().length > 1) {
        arr[i] =
          parseInt(arr[i].toString().split('')[0], 10) +
          parseInt(arr[i].toString().split('')[1], 10);
      }
    }
  }
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  return sum % 10 === 0;
}

console.log(isCreditCardNumber(79927398713));
console.log(isCreditCardNumber(4012888888881881));
console.log(isCreditCardNumber(5123456789012346));
console.log(isCreditCardNumber(378282246310005));
