import { Route } from "../../../config/common.config"
import { loginController } from "../../controller/auth/login.ctrl"
import {registerController} from '../../controller/auth/register.ctrl'
Route.route("/register").get(loginController)
.post(registerController)
module.exports = Route
