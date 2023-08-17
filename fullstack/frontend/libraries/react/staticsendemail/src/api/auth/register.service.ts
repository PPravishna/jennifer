export let registerApi=async(name:any,email:any,password:any)=>{
    var myHeaders=new Headers();
    myHeaders.append("Content-Type","application/x-www-form-urlencoded");
    var urlencoded=new URLSearchParams();
    urlencoded.append("email",email);
    urlencoded.append("password",password)
    urlencoded.append("name",name);
    var requestOptions={
        method:'POST',
        headers:myHeaders,
        body:urlencoded,
    }
    let data=fetch("http://localhost:8023/api/register,requestOptions")
    data=await(await data).json()
    console.log(data)
    return data
}