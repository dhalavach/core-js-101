/* eslint-disable */

const testArr = [1, 2, 3, 4];

function swapHeadAndTail(arr) {
  const head = arr.slice(0, Math.floor(arr.length / 2));
  const tail = arr.slice(Math.ceil(arr.length / 2), arr.length);
  if (arr.length % 2 !== 0) {
    tail.push(arr[Math.floor(arr.length / 2)]);
  }

  return [...tail, ...head];
}

console.log(swapHeadAndTail(testArr));
