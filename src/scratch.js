/* eslint-disable */

class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._contents = contents;
    this._filename = fullName.replace(/\.[a-zA-Z0-9]+$/, '');
    this._extension = fullName.substr(fullName.lastIndexOf('.') + 1);
    this._lineCounter = 0;
    this._charCounter = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._filename;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    if (this._contents === '') {
      this._contents = str;
    } else {
      this._contents += '\n' + str;
    }
  }

  gets() {
    let contArr = this._contents.split('\n');
    let res = contArr[this._lineCounter];
    this._lineCounter++;
    return res;
  }

  getc() {
    let res = this._contents[this._charCounter];
    this._charCounter++;
    return res;
  }
}

let test = new File('hello.txt', 'asdf');
console.log(test.extension);
// console.log(test.filename);
// console.log(test.fullName);
test.write('line1');
test.write('line2');
test.write('line3');

console.log(test.gets());
console.log(test.gets());
console.log(test.gets());

('55uxozsk0i8cbd5zwsq5i4.0mahvl47d6njkecws9mamj.e7ztl2pxpvwevm68xvhgka.mto0l9f299g6tvyf0m0l7');
('55uxozsk0i8cbd5zwsq5i4.0mahvl47d6njkecws9mamj.e7ztl2pxpvwevm68xvhgka');
