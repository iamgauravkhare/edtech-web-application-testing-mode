exports.contactUsEmail = (
  email,
  firstname,
  lastname,
  message,
  phoneNo,
  countrycode
) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Contact Us Form Confirmation</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.75);
          margin: 0;
          padding: 0;
        }
  
        .container {
          max-width: 450px;
          margin: 0 auto;
          padding: 7.5px;
          text-align: center;
          background-color: #007fff;
        }
  
        .sub-container {
          background-color: white;
          padding: 10px;
        }
  
        .head {
          font-size: 32px;
          color: white;
          background-color: #007fff;
          padding: 10px 30px;
          border-radius: 7.5px;
          display: inline-block;
        }
  
        .message {
          font-size: 18px;
          color: #007fff;
          text-decoration: underline;
          font-weight: bold;
          margin-bottom: 25px;
        }
  
        .body {
          font-size: 15px;
          margin-bottom: 25px;
          text-align: start;
        }
  
        .support {
          font-size: 14px;
          color: #999999;
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <div class="sub-container">
          <h1 class="head">CODENEST</h1>
          <div class="message">Contact Form Confirmation</div>
          <div class="body">
            <p>Dear ${firstname} ${lastname},</p>
            <p>
              Thank you for contacting us. We have received your message and will
              respond to you as soon as possible.
            </p>
            <p>Here are the details you provided -</p>
            <p>Name: ${firstname} ${lastname}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNo}</p>
            <p>Message: ${message}</p>
            <p>We appreciate your interest and will get back to you shortly.</p>
          </div>
          <div class="support">
            If you have any further questions or need immediate assistance, please
            feel free to reach out to us at
            <a href="mailto:infocodenest@gmail.com">infocodenest@gmail.com</a>. We
            are here to help!
          </div>
        </div>
      </div>
    </body>
  </html>
  `
}
