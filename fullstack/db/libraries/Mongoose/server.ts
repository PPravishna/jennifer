require("./config/db.config");
var { User } = require("./src");

// let vishnu = new User({
//   name: "vishnu",
//   class: "fullstack",
//   chocolate: "milky bar",
// });
// vishnu.save();

// let data = { name: "hari", class: "fullstack", chocolate: "kitkat" };
// let vishnu = new User(data);
// vishnu.save();

// let finder = async () => {
//   let findall = await User.find({ name: "hari" });
//   console.log(findall);
// };
// finder();

// let deleter = async () => {
//   let findall = await User.deleteOne({ chocolate: "fuse" });
//   console.log(findall);
// };
// deleter();

let updated = async () => {
  let findall = await User.updateOne(
    { name: "hari" },
    { $set: { chocolate: "cadbury" } }
  );
  console.log(findall);
};
updated();
