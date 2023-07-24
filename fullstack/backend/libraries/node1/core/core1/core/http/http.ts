let http = require("http");
console.log(http);

let fs = require("fs");
http.createServer((req: any, res: any) => {
  if (req.url == "/pravi") {
    fs.mkdirSync("ja");
    res.write("will give u chocalate");
    res.end();
  }
});
