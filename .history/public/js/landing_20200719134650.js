function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  if (validateEmail(email)) {

    fetch("/api/subscription", options)
      .then((res) => {
        if (res.status == 200) {
          fName.value("");
          lName.value("");
          email.value("");
          console.log("success");
        }
      })
      .then((res) => {
        res.json();
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {

  }

  

});

