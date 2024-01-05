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
      to: "altar.karatas@gmail.com", // Change to your recipient
      from: "karatasaltar@gmail.com", // Change to your verified sender
      template_id:"d-762ae0db22f44e9eba11552fa11550e4",
      dynamic_template_data: {
        userName: `${emailObject.firstName}`,
        userEmail: `${emailObject.email}`,
        userNum: `${emailObject.telephone}`,
        text: `${emailObject.userMessage}`
      }
    };

    try {
      const response = await sgMail.send(msg);
      return {
        statusCode: response[0].statusCode,
      };
    } catch (e) {
      return {
        statusCode: 403,
      };
    }
  }
};
