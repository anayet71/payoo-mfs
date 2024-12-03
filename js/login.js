// search: form submit reloading the page

// step 1: set event handler
document.getElementById("button-login").addEventListener('click', function(event){
    // step 2: prevent default behavior
    event.preventDefault /*  to stop reload the page when btn clicked */
    console.log("login button clicked")
    // get phone number
    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber)
})