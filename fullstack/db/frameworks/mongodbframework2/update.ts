var {MongoClient}= require('mongodb')
var dburl= "mongodb://127.0.0.1:27017"
var con=new MongoClient(dburl)
var dbName= "testDelete"

async function main3() {
    await con.connect()
    console.log("db connected")

    let mydb= con.db(dbName)
    let col= mydb.collection('students')

    let data= await col.updateOne({name:'vishnu'},{$set:{name:'sri vishnu'}})
    console.log(data)
}
main3()