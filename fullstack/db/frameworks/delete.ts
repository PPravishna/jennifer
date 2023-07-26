import { MongoClient as Mo2 } from "mongodb";
let dev_url3 = "mongodb://127.0.0.1:27017/Pravishna-jennifer";
let conn = new Mo2(dev_url3);
let connect = async () => {
  await conn.connect();
  console.log("db connetced");
  let db = conn.db("Pravishna-jennifer");
  let table = db.collection("Projects");
  let data = await table.deleteOne({ name: "vishnu" });
  console.log(data);
};
connect();
