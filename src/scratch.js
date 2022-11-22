/* eslint-disable */

function encodeToRot13(str) {
  const sourceString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const encodedString = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  const code = new Map();
  for (let i = 0; i < sourceString.length; i += 1) {
    code.set(sourceString[i], encodedString[i]);
  }
  const result = [];
  for (let j = 0; j < str.length; j += 1) {
    result.push(code.get(str[j]));
  }
  return result.join('');
}

console.log(encodeToRot13('ABCD'));
