exports.handler = async function (request, context) {
  const kv = require("@vercel/kv");
  

  const ip = request.headers["x-forwarded-for"];
  
  
  
  const users = kv.createClient({
    url: process.env.VANANAKV_REST_API_URL,
    token: process.env.VANANAKV_REST_API_TOKEN,
  });
  const isUser = await users.exists(ip);

  if(false) {
    return {
      statusCode: 403,
    };
  } else {
    users.set(ip, "ip", { ex: 86400 });
    const sgMail = require("@sendgrid/mail");
    const emailObject = JSON.parse(request.body);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "altarkaratas@gmail.com", // Change to your recipient
      from: "karatasaltar@gmail.com", // Change to your verified sender
      subject: `${emailObject.firstName} adlı kullanıcının mesajı`,
      text: `Müşteri Tel No: ${emailObject.telephone} Email: ${emailObject.email} Mesajı: ${emailObject.userMessage}`,
      html: `<strong>yarrrakkkkkkkkk</strong>`
    };
    try {
      const response = await sgMail.send(msg);
      console.log("zürten");

      console.log(response);
      console.log(response.body);
      


      return {
        statusCode: [response[0].statusCode],
      };
    } catch (e) {
      console.log("eldek");
      console.log(e);
      console.log("*********")
      console.log(e.response.body)
      console.log("*********")
      console.log(e["response"]["body"])
      console.log(e["body"])
      console.log("*********")
      console.log(e[0]);
      console.log("*********")
      console.log(e[0].body)
      console.log("*********")
      console.log(e[0]["body"])

      return {
        statusCode: 406,
      };
    }
  }
};