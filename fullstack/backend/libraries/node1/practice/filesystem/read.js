let fs = require("fs");

fs.readFile("./example.txt", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("File contents:", data.toString());
  }
});
