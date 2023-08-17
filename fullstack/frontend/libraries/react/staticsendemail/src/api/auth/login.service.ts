export let LoginApi=async(email:any,password:any)=>{
    var myHeaders=new Headers();
    myHeaders.append("Content-Type","application/x-www-form-urlencoded");
    var urlencoded=new URLSearchParams();
    urlencoded.append("email",email);
    urlencoded.append("password",password);
    var requestOptions={
        method:'POST',
        headers:myHeaders,
        body:urlencoded,
    }
    let data=fetch("http://localhost:8023/api/login",requestOptions)
    data=await(await data).json()
    console.log(data)
    return data
}