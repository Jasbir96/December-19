const nodemailer = require("nodemailer");
async function sendEmail() {
  try {
    // email configuration=> transport
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: "pepcodingdev@gmail.com",
        pass: config.APP_PASSWORD
      }
    })
    // email options
    const emailOptions = {
      from: "everyone@gmail.com",
      to: "mr.jasbirsingh96@gmail.com",
      subject: "My first Email",
      text: "I am testing email",
      html: "<h1>I am testing email</h1>"
    }
    // send mail
    await transport.sendMail(emailOptions);
  } catch (err) {
    console.log(err);
  }
}

sendEmail().then(function () {
  console.log("email has been send successfully")

}).catch(function (err) {
  console.log(err)
})
// signup => welcome email
// forget password=> email
// Email => link=> click=> password reset


// 