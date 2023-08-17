import { Schema } from "../../../config/common.config"
import {mangoose} from '../../../config/common.config'
let userStruc=new Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mangoose.model('user-register',userStruc)