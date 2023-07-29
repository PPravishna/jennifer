require("./config/db.config");
var { User } = require("./src");

let vishnu = new User({
  name: "vishnu",
  class: "fullstack",
  chocolate: "milky bar",
});
vishnu.save();
