let { MongoClient } = require("mongodb");
let dev_url = "mongodb://127.0.0.1:27017/";
let pro_url = "in mongoose";

let client = new MongoClient(dev_url);
// console.log(client.connect().then((a:any)=>{console.log(a)}))
let dbconnection = async () => {
  let dbconnect = await client.connect();
  console.log("db got connected");
  let db = client.db("Pravishna-jennifer");
  let col = db.collection("Projects");
  let mydata = {
    name: "pravishna",
    city: "bangaluru",
    favouriteMovie: "Raja Rani",
  };
  col.insertOne(mydata);
};
dbconnection();
