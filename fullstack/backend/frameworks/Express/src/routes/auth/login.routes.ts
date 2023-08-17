import { Route } from "../../../config/common.config";
import { loginController } from "../../controller/auth/login.ctrl";
Route.route("/login").get((req: any, res: any) => {
  res.send("hello");
})
.post(loginController)
module.exports = Route;
