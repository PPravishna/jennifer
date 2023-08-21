import { BrowserRouter ,Route,Routes} from "react-router-dom"
import { Home } from "./pages/home/Home.page"
import { Lessons } from "./pages/lessons/Lessons.page"
import { Login } from "./pages/login/Login.page"
import { Register } from "./pages/register/Register.page"
import { MyNavbar } from "./components/navbar/MyNavbar.com"
import { Allroutes } from "./routes"

export let App:React.FC<{}>=()=>{
  console.log("repeat")
  return <>

<BrowserRouter>
<Allroutes/>
</BrowserRouter>

  </>
}



