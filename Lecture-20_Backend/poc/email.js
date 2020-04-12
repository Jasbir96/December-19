const nodemailer = require("nodemailer");
async function sendEmail() {
  try {
    // email configuration=> transport
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5bc7f6bb8f9a36",
        pass: "2a0d2c25c2ad0a"
      }
    })
    // email options
    const emailOptions = {
      from: "jasbir.singh@pepcoding.com",
      to: "abc@gmail.com",
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

sendEmail().then(function(){
  console.log("email has been send successfully")
  
}).catch(function(err){
  console.log(err)
})
// signup => welcome email
// forget password=> email
// Email => link=> click=> password reset


// 