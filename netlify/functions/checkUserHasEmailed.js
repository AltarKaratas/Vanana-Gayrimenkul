let ElasticEmail = require("@elasticemail/elasticemail-client");

exports.handler = async function (event, context) {
  const formObject = await event.json();

    console.log(formObject + "********")
    console.log(context)


  let defaultClient = ElasticEmail.ApiClient.instance;
  let api = new ElasticEmail.EmailsApi();
  let apikey = defaultClient.authentications["apikey"];

  apikey.apiKey =
    "2269B4890736E01C73E9B21DBE0A5B5D48EF7DCC5596E624A95CD024F27AAB05F86CB2CB03B0A020A47DCEDC6DFFD5D8";

  let email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [new ElasticEmail.EmailRecipient("karatasaltar@gmail.com")],
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: "HTML",
          Content: `${formObject.userMessage} Telefon Numaram:${formObject.telephone}`,
        }),
      ],
      Subject: `Vanana Gayrimenkul ${formObject.firstName} isimli müşterinin e-maili`,
      From: formObject.email,
    },
  });

  try {
    var callback = function (error, data, response) {
      if (error) {
        throw error.message;
      } else {
        return response.json(response.statusCode);
      }
    };
    await api.emailsPost(email, callback);
  } catch (error) {
    return response.json(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
