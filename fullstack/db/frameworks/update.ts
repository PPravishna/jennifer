//let { MongoClient } = require("mongodb");
import { MongoClient as Mo } from "mongodb";

let dev_url1 = "mongodb://127.0.0.1:27017/Pravishna-jennifer";
let con = new Mo(dev_url1);
(async () => {
  try {
    await con.connect();
    console.log("db connected11111");
    let db = con.db("Pravishna-jennifer");
    let alldata = db.collection("Projects");
    let allusers = await alldata.updateOne(
      { name: "vishnu" },
      {
        $set: {
          favouritemovie: "shivaji the boss",
        },
      }
    );
    console.log(allusers);
  } catch (e) {
    console.log("got error");
  }
})();
