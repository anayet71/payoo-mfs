// add money to the account

// Step 1: add money event handler added
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // Prevent page reload after from submit(without matching data page should not be reloaded)
    event.preventDefault()

    // step 2: get money to be added to the balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    stringToNumberAdd = parseInt(addMoneyInput)
    console.log(  stringToNumberAdd)


    // get the pin number
    const pinNumberInput = document.getElementById("input-pin-number").value;
    if(pinNumberInput === "1234"){

        addMoneyInput
        // console.log(pinNumberInput)
        updateAmount = document.getElementById('stat-value').innerText
        stringToNumberDef = parseInt(updateAmount)
        
        newAmount = stringToNumberAdd + stringToNumberDef
         
        console.log(updateAmount = newAmount)

        // console.log(typeof initialAmount)
        // newAmount = parseInt(addMoneyInput)  + parseInt(initialAmount.innerText)
        // const initialAmount = document.getElementById('stat-value').innerText = newAmount
        // totalAmount = initialAmount = newAmount
        // addMoneyInput = totalAmount.value
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