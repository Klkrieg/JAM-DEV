//implement this or similiar and call in below onSumbit
// function ValidateEmail(mail) {
//   if (
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
//       myForm.emailAddr.value
//     )
//   ) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }

var subscribe = document.querySelector(".footer-form");

subscribe.submit(function (event) {
  // event.preventDefault();

  const firstName = document.querySelector("#fName").value;
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

  const jsonData = JSON.stringify(data); //??
  const url = `https://us18.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LISTID}`; //replace X with number after US on api key
  const options = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: Data,
    method: "POST",
    auth: `${process.env.MAILCHIMP_API_KEY_AUTH}`,
  };

  fetch(url, options)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      //    if (res.statusCode === 200) {
      //       alert("Thank you for subscribing!");
      //    } else if () {
      //       alert("You are already subscribed.");
      //    } else {
      //       alert("Please try again.");
      //    }

      console.log(res.data);
    });
});
