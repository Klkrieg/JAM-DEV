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
      if (res.status == 200) {
        subscribe.reset();//try putting outside of fetch
        console.log(res);
        res.json();
      }
    })
    .then((data)=> {
      if(data) {console.log(data)}
    })
    .catch((err) => {
      console.error("Error:", err);
    });



});

