//let {MongoClient }=require('mongodb')
import { MongoClient as Mo } from "mongodb";

let dev_url1 = "mongodb://127.0.0.1:27017/";
let con = new Mo(dev_url1);
(async () => {
  try {
    await con.connect();
    console.log("db connected11111");
    let db = con.db("Pravishna-jennifer");
    let alldata = db.collection("students");
    let allusers = await alldata.find({}).toArray();
    console.log(allusers);
  } catch (e) {
    console.log("got error");
  }
})();
