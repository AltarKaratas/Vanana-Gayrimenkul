let ElasticEmail = require("@elasticemail/elasticemail-client");

exports.handler = async function (event, context) {

  let defaultClient = ElasticEmail.ApiClient.instance;
  let apikey = defaultClient.authentications["apikey"];
  apikey.apiKey ="3734ED0DBF15015B7EBE8CFA4F2C1E1FA5764876B0763F6FCD18E140AE6A108A6C648334C4B71741375399C739B66FFD";
  
  let api = new ElasticEmail.EmailsApi();
  let email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [new ElasticEmail.EmailRecipient("karatasaltar@gmail.com")],
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: "HTML",
          Content: ` Telefon Numaram:`,
        }),
      ],
      Subject: `Vanana Gayrimenkul   isimli müşterinin e-maili`,
      From: "karatasaltar@gmail.com",
    },
  });

 
  await api.emailsPost(email, (error,data,response) => {
    if(error){
      console.log(error)
    }
    else{
      console.log(data);
    }
  });
  return {
    response:"ok"
  }
};
