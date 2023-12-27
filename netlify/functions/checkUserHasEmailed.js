exports.handler = async function (request, context) {
  const kv = require("@vercel/kv");
  const ip = request.headers["x-forwarded-for"];
  
  console.log(ip)
  console.log(request)
  const users = kv.createClient({
    url: process.env.VANANAKV_REST_API_URL,
    token: process.env.VANANAKV_REST_API_TOKEN,
  });
  const isUser = await users.exists(ip);

  console.log(!!isUser)
  if(isUser) {
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
      subject: `${emailObject.firstName} adlı kullanıcının mesajı`,
      text: `Müşteri Tel No: ${emailObject.telephone} Email: ${emailObject.email} Mesajı: ${emailObject.userMessage}`,
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
