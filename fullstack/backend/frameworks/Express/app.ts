require("./config/db.config");
let express = require("express");
let app1 = express();
let cors1 = require("cors");
app1.use(cors1());
let path1 = require("path");
app1.use(express.static(path1.join(__dirname, "public/images")));
app1.use(express.static(path1.join(__dirname, "public/videos")));
console.log(path1.join(__dirname, "public/image"));

let endPoint = require("./src/routes/index");

app1.use("/api", endPoint.LoginApi);
app1.use("/api", endPoint.RegisterApi);

app1.route("/api/register").get((req: any, res: any) => {
    res.send("get register api");
  })

  .post((req: any, res: any) => {
    res.send("get register api");
  })

  .put((req: any, res: any) => {
    res.send("get register api");
  })

  .delete((req: any, res: any) => {
    res.send("get register api");
  });






// import { mailSender } from "./sendingemailapi/sendmail";

// let express = require("express");
// let app = express();

// let cors = require("cors");
// app.use(cors());

// let datasteeler = (req: any, res: any, next: any) => {
//   console.log("Iam steeling");
//   console.log("Iam there", req.params);
//   console.log("Im there", req.query);
//   next();
// };
// app.use(datasteeler);

// app.get("/home", (req: any, res: any) => {
//   console.log("i got called");
//   res.send("hello im your first api");
// });

// app.get("/middleware", (req: any, res: any) => {
//   mailSender(
//     "Pravi",
//     "ppravishna5@gmail.com",
//     "test mail",
//     "Test mail successfull"
//   );

//   res.send("iam very secure");
// });

// app.listen(8023, () => {
//   console.log("server is running on http://localhost:8023/");
// });
