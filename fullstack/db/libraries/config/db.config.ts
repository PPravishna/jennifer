const mongoose = require("mongoose");
let devurl = "mongodb://127.0.0.1:27017/Pravishna-jennifer";
mongoose.connect(devurl).then(() => console.log("Connected!"));
