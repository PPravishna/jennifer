let express1 = require("express");
let app1 = express1();

app1.get("/hack", (req: any, res: any) => {
  console.log("i got called");
  res.send("hello im your first api");
});
app1.listen(8015, () => {
  console.log("server is running on http://localhost:8015/");
});

let nodemailer = require("nodemailer");
let mytoken = "bzjhvqrqsgnfeqrs";
let mailSender = async (name: any, email: any, subject: any, text: any) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ppravishna2002@gmail.com",
      pass: "bzjhvqrqsgnfeqrs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailoptions = {
    from: "ppravishna2002@gmail.com",
    to: `${email}`,
    subject: `${subject}`,
    text: `Hi ${name}${text}`,
  };
  transporter.sendMail(mailoptions, (err: any, res: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent");
    }
  });
};

mailSender(
  "Pravi",
  "ppravishna5@gmail.com",
  "test mail",
  "Test mail successfull"
);
