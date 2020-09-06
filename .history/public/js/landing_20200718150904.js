document.addEventListener("DOMContentLoaded", function (event) {
    var subscribe = document.querySelector("#subscribeButton");

    
    subscribe.submit(function(event) {
        event.preventDefault();

        const firstName = document.querySelector("#fName").value
        const lastName = document.querySelector("#lName").value;
        const email = document.querySelector("#email").value;


    })


});
