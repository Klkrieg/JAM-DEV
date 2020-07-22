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

<<<<<<< HEAD
const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const signUpWrapper = document.getElementById('sign-up__modal-wrapper');
const signInWrapper = document.getElementById('sign-in__modal-wrapper');


signInBtn.addEventListener("click", modalDisplay);
signUpBtn.addEventListener("click", modalDisplay);
      
function closeModal(target){
    document.body.addEventListener('click', (event)=>{
        let target = event.target.class;
        if(target !== "modal-content-wrapper"){
            console.log(target);
        }
    });
    };

function modalDisplay({target}){
    target.id === "sign-in-btn" ? signInWrapper.style.display = "block" : signUpWrapper.style.display = "block" ;

    
    //closeModal();
}

window.addEventListener('click', (e)=>{
    if(e.target.id === 'sign-up__modal-wrapper' || e.target.id === 'sign-in__modal-wrapper'){
        signUpWrapper.style.display = 'none';
        signInWrapper.style.display = 'none';
    }else if(e.target.id === "sign-up-close" || e.target.id === "sign-in-close"){
        signUpWrapper.style.display = 'none';
        signInWrapper.style.display = 'none';
    }
})




=======
>>>>>>> 4d934b232e8a742f82832ef2d10a78a6a74723ba
