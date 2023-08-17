let UserRegister =require('../models')
export const userExistescheck=async(email:any)=>{
    let find=await UserRegister.find({email:email})
    return find
}