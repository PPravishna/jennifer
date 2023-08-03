import { mailSender } from "./sendingemailapi/sendmail";

let express = require("express");
let app = express();

let cors = require("cors");
app.use(cors());

let datasteeler = (req: any, res: any, next: any) => {
  console.log("Iam steeling");
  console.log("Iam there", req.params);
  console.log("Im there", req.query);
  next();
};
app.use(datasteeler);

app.get("/home", (req: any, res: any) => {
  console.log("i got called");
  res.send("hello im your first api");
});

app.get("/middleware", (req: any, res: any) => {
  mailSender(
    "Pravi",
    "ppravishna5@gmail.com",
    "test mail",
    "Test mail successfull"
  );

  res.send("iam very secure");
});

app.listen(8023, () => {
  console.log("server is running on http://localhost:8023/");
});
