var subscribe = document.querySelector(".footer-form");
var formHeader = document.querySelector("#form-tagline");
var subscribeButton = document.querySelector("#subscribeButton");

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
        subscribe.reset();
        formHeader.innerText = "Thanks for subscribing";
        subscribeButton.setAttribute("value", "Thanks!");
      }
      console.log(res);
      res.json();
    })
    // .then(data=>console.log(data))
    .catch((err) => {
      console.error("Error:", err);
    });

});

const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const signUpWrapper = document.getElementById('sign-up__modal-wrapper');
const signInWrapper = document.getElementById('sign-in__modal-wrapper');


signInBtn.addEventListener("click", modalDisplay);
signUpBtn.addEventListener("click", modalDisplay);
      
function closeModal(event){
    if(event.key === 'Escape'){
      signUpWrapper.style.display = 'none';
      signInWrapper.style.display = 'none';
    }
};

function modalDisplay({target}){
    target.id === "sign-in-btn" ? signInWrapper.style.display = "block" : signUpWrapper.style.display = "block" ;
    document.body.addEventListener('keydown', closeModal);
  };

window.addEventListener('click', (e)=>{
    if(e.target.id === 'sign-up__modal-wrapper' || e.target.id === 'sign-in__modal-wrapper'){
        signUpWrapper.style.display = 'none';
        signInWrapper.style.display = 'none';
    }else if(e.target.id === "sign-up-close" || e.target.id === "sign-in-close"){
        signUpWrapper.style.display = 'none';
        signInWrapper.style.display = 'none';
    }
})




