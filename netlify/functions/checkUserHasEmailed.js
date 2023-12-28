exports.handler = async function (request, context) {
  const kv = require("@vercel/kv");
  const fetch = require("node-fetch");

  const ip = request.headers["x-forwarded-for"];

  const users = kv.createClient({
    url: process.env.VANANAKV_REST_API_URL,
    token: process.env.VANANAKV_REST_API_TOKEN,
  });

  const isUser = await users.exists(ip);
  if (isUser) {
    return {
      statusCode: 403,
    };
  } else {
    users.set(ip, "ip", { ex: 86400 });
    const sgMail = require("@sendgrid/mail");
    const emailObject = JSON.parse(request.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "karatasaltar@gmail.com", // Change to your recipient
      from: "karatasaltar@gmail.com", // Change to your verified sender
      subject: `${emailObject.firstName} adlı müşterinin mesajı`,
      html: `<html><body><strong>Müşteri Tel No:</strong> ${emailObject.telephone} 
      <strong>Email:</strong> ${emailObject.email} 
      <strong>Mesajı:</strong> ${emailObject.userMessage}</body>
      </html>`,
    };

    try {
      const response = await sgMail.send(msg);
      return {
        statusCode: [response[0].statusCode],
      };
    } catch (e) {
      return {
        statusCode: 406,
      };
    }
  }
};
