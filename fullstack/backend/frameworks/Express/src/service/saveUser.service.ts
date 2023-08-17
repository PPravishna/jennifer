let UserRegister=require('../models')
export const saveUser=async(props:any)=>{

    let bhavani=new UserRegister({...props})
    bhavani.save()

    return bhavani
}