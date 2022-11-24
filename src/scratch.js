/* eslint-disable */

// *   Map {
//   *    "Belarus" => ["Brest", "Grodno", "Minsk"],
//   *    "Russia" => ["Omsk", "Samara"],
//   *    "Poland" => ["Lodz"]
//   *   }
//   */

function group(array, keySelector, valueSelector) {
  const multiMap = new Map();
  let keys = [];
  array.map((e) => keys.push(keySelector(e)));

  keys.map((e) =>
    multiMap.set(
      e,
      array.filter((el) => keySelector(el) === e).map(valueSelector)
    )
  );
  return multiMap;
}

console.log(
  group(
    [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' },
    ],
    (item) => item.country,
    (item) => item.city
  )
);
