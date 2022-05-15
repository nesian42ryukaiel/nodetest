const foo = function () {
  console.log(this);
};

foo(); // window; "undefined" in Node.js

var person = {
  name: "Lee",
  printName: function () {
    console.log(this.name);
  },
};

person.printName(); // "Lee"; "Lee" in Node.js
