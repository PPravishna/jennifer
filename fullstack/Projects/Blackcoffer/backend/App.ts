require('./config/db.config')
let express=require('express')
var {BlackCoderSer}=require('./src/models/index') ;
let app=express()
var cors = require('cors')
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// import Jsondata from './jsondata.json';
var Jsondata = require('./jsondata.json');
app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.post('/savedata',async(req:any,res:any)=>{
    let {data}=req.body
    console.log("data",Jsondata)
   let datasaver=new BlackCoderSer({data:Jsondata})
   datasaver.save()
    console.log("data",data)
    res.send('data saved')
})

app.get('/getData',async(req:any,res:any)=>{
   let data=await BlackCoderSer.find({})
   res.send(data)
})
app.listen(8009,()=>{
    console.log("im running on port 8009")
})