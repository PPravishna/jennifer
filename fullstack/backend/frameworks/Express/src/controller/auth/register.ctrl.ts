import { saveUser } from "../../service/saveUser.service";
import { userExistescheck } from "../../service/userExistesCheck.service";
export let registerController=async(req:any,res:any)=>{
    let {name,email,password}=req.body
console.log(name,email,password)
let userData=await userExistescheck(email)
if (userData.length === 0) {
    let data = await saveUser({ name, email, password })
    res.send(data)
} else {
    res.send([])
}

}