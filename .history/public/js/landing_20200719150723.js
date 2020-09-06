var subscribe = document.querySelector(".footer-form");

subscribe.addEventListener("submit", function (event) {
  event.preventDefault();

  

  var fName = document.querySelector("#fName").value;
  var lName = document.querySelector("#lName").value;
  var email = document.querySelector("#email").value;

  const data = {
    firstName: fName,
    lastName: lName,
    email: email
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  fetch("/api/subscription", options)
    .then((res) => {
      if (res) {
        subscribe.reset();
        console.log("success");
        res.json();
      }
    })
    .then((data)=> {
      if(data) {}
    })
    .catch((err) => {
      console.error("Error:", err);
    });



});

