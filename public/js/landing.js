document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    axios({
      method: "POST",
      url: "http://localhost:3001/send", //https://joel-delatte-portfolio.herokuapp.com/
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((res) => {
      if (res.data.msg === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (res.data.msg === "fail") {
        alert("Message failed to send");
      }
    });
  };

  
});
