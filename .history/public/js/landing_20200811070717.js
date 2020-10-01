var subscribe = document.querySelector(".footer-form");
var formHeader = document.querySelector("#form-tagline");
var subscribeButton = document.querySelector("#subscribeButton");

//Mailchimp Subscribe Call and Form handling///
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
      // console.log(res);
      res.json();
    })
    // .then(data=>console.log(data))
    .catch((err) => {
      console.log("Error:", err);
    });

});

//USER SIGN-UP FORM HANDLING AND API POST CALL
///////////
const signUpForm= document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', function(event){
  event.preventDefault();
  const signUpEmail = document.getElementById('sign-up-email').value;
  const signUpfName = document.getElementById('sign-up-fName').value;
  const signUplName = document.getElementById('sign-up-lName').value;
  const signUpPassword = document.getElementById('sign-up-password').value;
  const signUpBirthday = document.getElementById('sign-up-birthday').value;
  const signUpPhoneNumber = document.getElementById('sign-up-phoneNumber').value;
  const signUpProfileType = document.getElementById('sign-up-profileType').value;



  let signUpData = {
    email: signUpEmail,
    password: signUpPassword,
    firstName: signUpfName,
    lastName: signUplName,
    birthday: signUpBirthday,
    phoneNumber: signUpPhoneNumber,
    profileType: signUpProfileType,
  };
  

  ///DECLARE OPTIONS FOR POST
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(signUpData),
  };
///////SEND POST REQUEST TO API
  fetch("/api/users", options)
    .then((res , req) => {
      if (res.status == 200) {
        signUpForm.reset();
        closeModal();
      }
      res.json();
    })
    // .then(data=>console.log(data))
    .catch((err) => {
      console.error("Error:", err);
    });
});

//SIGNIN FORM HANDLING///////////////////////////
const signInForm = document.getElementById('sign-in-form');
signInForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  //DOC SELECTORS
  const signInEmail = document.getElementById("sign-in-email").value;
  const signInPassword = document.getElementById("sign-in-password").value;

  let signInData = {
    email: signInEmail,
    password: signInPassword
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(signInData),
  };

  fetch("/api/users/login", options)
    .then((res, req)=>{
      if(res.status == 200){
        signInForm.reset();
        closeModal();
      }
      console.log(req);
      //res.json();
    })
    .catch((err)=>{
       console.log("Error", err);
    })

})


/////////DECLARE DOCUMENT SELECTORS////////

const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const signUpWrapper = document.getElementById('sign-up__modal-wrapper');
const signInWrapper = document.getElementById('sign-in__modal-wrapper');
const toSignIn = document.getElementById('switch-to-sign-in');
const toSignUp = document.getElementById('switch-to-sign-up');

////////////ADD EVENTLISTENERS FOR MODAL DISPLAY////////////

signInBtn.addEventListener("click", modalDisplay);
signUpBtn.addEventListener("click", modalDisplay);
toSignIn.addEventListener('click', modalSwitch);
toSignUp.addEventListener('click', modalSwitch);
//////////////MODAL FUNCTIONALITY/////////////
function closeModal(){
      signUpWrapper.style.display = 'none';
      signInWrapper.style.display = 'none';
};

function modalSwitch({target}){
  if(target.id === 'switch-to-sign-in'){
    signUpWrapper.style.display = 'none';
    signInWrapper.style.display = 'block';
  }else{
    signInWrapper.style.display = 'none';
    signUpWrapper.style.display = 'block';
  }
};
function modalDisplay({target}){
    target.id === "sign-in-btn" ? signInWrapper.style.display = "block" : signUpWrapper.style.display = "block" ;
    document.body.addEventListener('keydown', (event)=>{
      if(event.key === 'Escape'){
        closeModal();
      }
    });
  };

window.addEventListener('click', (e)=>{
    if(e.target.id === 'sign-up__modal-wrapper' || e.target.id === 'sign-in__modal-wrapper'){
        closeModal();
    }else if(e.target.id === "sign-up-close" || e.target.id === "sign-in-close"){
        closeModal();
    }
})

//////////