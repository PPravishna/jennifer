export let feacthApiData=async()=>{

    let data=fetch("http://localhost:8009/getData")
    data=await(await data).json()
    console.log("data",data)
  return data
 }