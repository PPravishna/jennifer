let fs = require("fs");
// fs.mkdirSync("pravishna");
// fs.writeFileSync(
//   "pravishna/breakfast.txt",
//   "today pravishna had dosa with chutney"
// );

// fs.appendFileSync(
//   "pravishna/breakFast.txt",
//   "for luch make chiken briyany ready"
// );

// let data = fs.readFileSync("pravishna/breakFast.txt", "utf-8");
// console.log(data);

fs.unlinkSync("pravishna/del.txt");
fs.rmdirSync("del");
