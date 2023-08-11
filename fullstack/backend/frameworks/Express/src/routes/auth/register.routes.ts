import { Route } from "../../../config/common.config";
import { loginController } from "../../controller/login.ctrl";
Route.route("/register").get(loginController);
module.exports = Route;
