//import { mailSender } from "./sendingemailapi/sendmail";
const express2 = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

let app2 = express2();
let port = 3000; // You can change this port if needed

let datasteeler = (req: any, res: any, next: any) => {
  console.log("Iam steeling");
  console.log("Iam there", req.params);
  console.log("Im there", req.query);
  next();
};
app2.use(datasteeler);

app2.use(express2.urlencoded({ extended: true }));
app2.use(bodyParser.json());
// app2.post("/", (req: any, res: any) => {
//   res.send(JSON.stringify(req.body));
// });

// Serve HTML form
app2.get("/", (req: any, res: any) => {
  res.send(`
    <form action="/send-email" method="post">
    <label for="name">Name:</label>
    <input type="name" id="name" name="name" required>
    <br>
    <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <br>
      <label for="Password">Password:</label>
      <input type="Password" id="Password" name="password" required>
      <br>
      <br>
      <label for="Phonenumber">Phone Number:</label>
      <input type="number" id="number" name="number" required>
      <br>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// app2.get("/middleware", (req: any, res: any) => {
//   mailSender(
//     "Pravi",
//     "ppravishna5@gmail.com",
//     "test mail",
//     "Test mail successfull"
//   );

//   res.send("iam very secure");
// });

// Handle form submission
app2.post("/send-email", datasteeler, (req: any, res: any) => {
  const { email } = req.body;
  const { name } = req.body;
  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can use other email services as well
    auth: {
      user: "ppravishna2002@gmail.com", // Your email
      pass: "cnrczjwedhirlzvj", // Your password (make sure to use app-specific password if enabled)
    },
  });

  // Email data
  const mailOptions = {
    from: "ppravishna2002@gmail.com",
    to: "ppravishna5@gmail.com",
    subject: "Test Email",
    text: "This is a test email sent from Express.js and Node.js.",
  };

  // Send email
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error);
      res.send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// Start the server
app2.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
