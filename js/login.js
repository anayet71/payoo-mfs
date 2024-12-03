// search: form submit reloading the page

// step 1: set event handler
document.getElementById("button-login").addEventListener('click', function(event){
    // step 2: prevent default behavior
    event.preventDefault() /*  to stop reload the page when btn clicked */


    // step 3: get phone number
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById("pin-number").value
    console.log(phoneNumber , pinNumber)

    // step 4: Verify the phone and pin
    if(phoneNumber === '5' && pinNumber === "1234"){
        console.log('You are logged in')
        // step 5: allow user to use
        phoneNumber.value = " ";
        pinNumber.value = " "
        window.location.href = "home.html";
    }
    else{
        alert('Wrong phone number or pin')
    }
})