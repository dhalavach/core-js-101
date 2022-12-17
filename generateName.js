/* eslint-disable */
// https://www.codewars.com/kata/586a933fc66d187b6e00031a

// function generateName() {
//   let name = Math.ceil(Math.random() * 1e6).toString();
//   while (photoManager.nameExists(name) | (name.length !== 6)) {
//     name = Math.ceil(Math.random() * 1e6).toString();
//   }
//   return name;
// }

function generateName() {
  let i = 60466175;

  let name = i.toString(36);
  while (photoManager.nameExists(name) | (name.length !== 6)) {
    i++;
    name = i.toString(36);
  }
  return name;
}
let i = 60466175;
console.log(i.toString(36));
