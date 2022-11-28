/* eslint-disable */

function findFirstSingleChar(str) {
  const arr = str.replace(/\s/g, '').split('');
  arr.sort();
  console.log(arr);
  if (arr[0] !== arr[1]) return arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) return arr[i];
  }
  return null;
}

console.log(findFirstSingleChar('abracradabra'));
