function test() {
  console.log(test);
}

function sum(a, b) {
  console.log(a + b);
}

let obj = {
  name: "xyz",
  age: 21,
};

let name = "abc";

module.exports = {
  test,
  sum,
  obj,
};

module.exports.name = "abc";
