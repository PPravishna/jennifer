import { Route } from "../../../config/common.config";
Route.route("/login").get((req: any, res: any) => {
  res.send("hello");
});
module.exports = Route;
