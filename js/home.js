// add money to the account

// Step 1: add money event handler added
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // Prevent page reload after from submit(without matching data page should not be reloaded)
    event.preventDefault()

    // step 2: get money to be added to the balance
     addMoneyInput = document.getElementById("input-add-money").value;
    addMoneyInput = parseInt(addMoneyInput)
    console.log(  addMoneyInput)


    // step 3: get the pin number
    const pinNumberInput = document.getElementById("input-pin-number").value;
    if(pinNumberInput === "1234"){
        // step 4: get the current balance 
        updateAmount = document.getElementById('balance').innerText
        updateAmount = parseInt(updateAmount)
        // step 5: add current and current balance
        newAmount = addMoneyInput + updateAmount
         
        document.getElementById('balance').innerText = newAmount
        event.target.submit()
        addMoneyInput.value = ' ';
       

       
    }
    else{
        alert("Wrong pin")
    }





    // pinNumber = document.getElementById("input-pin-number")
    // if(pinNumber === "1234" ){
        
    // }
    // else{
    //     alert("Wrong pin")
    // }
})