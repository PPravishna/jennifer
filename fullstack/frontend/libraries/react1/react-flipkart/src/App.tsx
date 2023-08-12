export const App:React.FC=()=>{
  vishnu()
  return <div>
  {vishnu()}
 {Vijay()}

<Vijay></Vijay>
<h1>Hello everyone</h1><p>Hello iam a paragraph</p>
  </div>
}


function vishnu(){
  console.log("Iam vishnu")
  return "hello bee"
}

function Vijay(){
  return <h1>hello iam vijay</h1>
}