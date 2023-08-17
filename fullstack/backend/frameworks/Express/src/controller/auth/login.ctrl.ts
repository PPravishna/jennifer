import  {userExistescheck} from "../../service/userExistesCheck.service"

 export let loginController =async(req:any,res:any)=>{
    let {email,password}=req.body
    console.log(email,password)
    let data=await userExistescheck(email)
    console.log('gg',data)
    let invalid=[{state:"wrong email id password"}]
    if(data.length==0){
      res.send(invalid)

    }else{
      if(data[0].password==password){
        res.send(data)
      }else{
        res.send(invalid)
      }
    }
  }
