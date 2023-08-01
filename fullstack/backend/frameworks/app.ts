let express = require("express");
let app = express();

app.get("/home", (req: any, res: any) => {
  console.log("i got called");
  res.send("hello im your first api");
});
app.listen(8002, () => {
  console.log("server is running on http://localhost:8002/");
});
