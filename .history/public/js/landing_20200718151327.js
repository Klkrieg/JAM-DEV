document.addEventListener("DOMContentLoaded", function (event) {
    var subscribe = document.querySelector("#subscribeButton");

    
    subscribe.submit(function(event) {
        event.preventDefault();

        const firstName = document.querySelector("#fName").value
        const lastName = document.querySelector("#lName").value;
        const email = document.querySelector("#email").value;

        const data = {
          members: [
            {
              email_address: email,
              status: "subscribed",
              merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
              },
            },
          ],
        };

        const jsonData = JSON.stringify(data);
        const url = `https://us18.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LISTID}`; //replace X with number after US on api key
        const options = {
          method: "POST",
          auth: `${process.env.MAILCHIMP_API_KEY_AUTH}`,
        };

        

    })


});
