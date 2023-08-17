let express1 = require("express");
let app = express1();
let cors = require("cors");
app.use(cors());
let path = require("path");

app.use(express1.static(path.join(__dirname, "public/images")));
app.use(express1.static(path.join(__dirname, "public/videos")));
console.log(path.join(__dirname, "public/image"));

app.get("/api/datatypes-html", (req: any, res: any) => {
  let fun = () => {
    console.log("iam a function");
  };
  res.send(`<h1 style="color:red;">ABC</h1>`);
});

app.get("/api/datatypes-fun", (req: any, res: any) => {
  let array = [{ mango: 100 }];
  let fun = () => {
    console.log("iam a function");
  };
  res.send([fun]);
});

app.get("/api/datatypes-obj", (req: any, res: any) => {
  let array = [{ orange: "100" }];
  res.send({ orange: "200" });
});

app.get("/api/datatypes-array", (req: any, res: any) => {
  let array = [{ apple: "200" }];
  res.send([1, 3, array]);
});

const numbers = [10, 20, 30];
app.get("/api/datatypes-number", (req: any, res: any) => {
  res.send(numbers);
});

// app.get("/api/datatypes-number", (req: any, res: any) => {
//   res.send("hello").sendStatus(300);
// });

app.get("/api/datatypes-string", (req: any, res: any) => {
  //res.send("hello Iam string");
  res.send("hello iam another string");
  res.send(`hello iam one more string`);
});

//This is middleware
let datastealer = (req: any, res: any, next: any) => {
  console.log("iam stealing");
  console.log("im there", req.params);
  console.log("iam there", req.query);
  next();
};

//This is the way to call middleware
app.use(datastealer);

//basic example of api
app.get("/home", (req: any, res: any) => {
  console.log("I got called");
  res.send("hello iam your first api");
});

app.get("/middleware", (req: any, res: any) => {
  res.send("iam very secure");
});

app.get("*", (req: any, res: any) => {
  res.send("end point do not exists");
});

app.listen(8030, () => {
  console.log("server is running on http://localhost:8030/");
});
