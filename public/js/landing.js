document.addEventListener("DOMContentLoaded", function (event) {
    var subscribe = document.querySelector("#subscribeButton");

    


});

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




