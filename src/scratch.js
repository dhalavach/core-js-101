/* eslint-disable */
const testArr = [
  { country: 'Russia', city: 'Moscow' },
  { country: 'Belarus', city: 'Minsk' },
  { country: 'Poland', city: 'Warsaw' },
  { country: 'Russia', city: 'Saint Petersburg' },
  { country: 'Poland', city: 'Krakow' },
  { country: 'Belarus', city: 'Brest' },
];

function getIdentityMatrix(n) {
  // const result = [];
  // function replaceAt(array, index, value) {
  //   const ret = array.slice(0);
  //   ret[index] = value;
  //   return ret;
  // }
  // const temp = Array(n);
  // temp.fill(0);
  // let i = 0;
  // while (i < n) {
  //   result.push(replaceAt(temp, i, 1));
  //   i++;
  // }
  // return result;

  const result = Array(n);
  result.fill([]);
  const temp = Array(n);
  temp.fill(0);

  function replaceAt(array, index, value) {
    const res = array.slice(0);
    res[index] = value;
    return res;
  }
  function pushRow( i, arr) {
    arr[i] = replaceAt(temp, i, 1);
  }
  result.map((e, i) => replaceAt(temp, i, 1));

  return result;
}
console.log(getIdentityMatrix(2));
