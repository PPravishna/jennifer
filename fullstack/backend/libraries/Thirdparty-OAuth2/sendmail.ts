let nodemailer = require("nodemailer");
let mytoken = "vilmalhmipqjptby";
let mailSender = async (name: any, email: any, subject: any, text: any) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ppravishna2002@gmail.com",
      pass: "vilmalhmipqjptby",
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

mailSender("Hi sir", "waseemahmed116@gmail.com", "test mail", "");
