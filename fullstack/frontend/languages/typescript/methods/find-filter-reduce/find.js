let myitems = [
  { fruit: "apple" },
  { fruit: "banana" },
  { fruit: "banana" },
  { fruit: "mango", price: 100, img: "whatever" },
];

let div = document.getElementById("root");

let pravishna = document.createElement("h1");
pravishna.innerHTML = "favourite fruit:-mango";
div.appendChild(pravishna);

let gotit = myitems.find((val) => {
  return val.fruit == "banana";
});

let gotit2 = myitems.filter((val) => {
  return val.fruit == "banana";
});

console.log(gotit);
console.log(gotit2);

myitems.map((val) => {
  let h1 = document.createElement("h1");
  h1.innerHTML = `${val.fruit}`;
  div.appendChild(h1);
});
