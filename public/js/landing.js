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

subscribe.addEventListener("submit", function (event) {
  event.preventDefault();

  const fName = document.querySelector("#fName").value;
  const lName = document.querySelector("#lName").value;
  const email = document.querySelector("#email").value;

  const data = {
    firstName: fName,
    lastName: lName,
    email: email
  };

  const options_1 = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  fetch("/api/subscription", options_1)
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.error("Error:", err);
  });

  //how do I receive information from backend to conditionally render modals or alerts to landing page
  //so that I dont have to route to new page from backend
  const options_2 = {
    method: "GET",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  fetch("/api/subscription", options_2);
});

