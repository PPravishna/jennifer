let {Schema}=require('mongoose')
let mangoose=require('mongoose')
let balckStruc=new Schema({
    data: {
        type: Object,
        required: false //depends on whether the field is mandatory or not
      }
})
module.exports=mangoose.model('black-cofer-data',balckStruc)