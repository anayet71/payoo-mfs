

// since all function will work after click cash out button so get it first 
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    //  stop reloading the page
    event.preventDefault()
   
    typePin = document.getElementById("input-cash-out-pin").value
    typeAmount = document.getElementById('input-cash-out').value
    if( typePin === "1010" && typeAmount > 0 ){
        // get current balance
        currentBalance = document.getElementById('balance').innerText
        // convert string to number
        currentBalance = parseFloat(currentBalance)
        typeAmount = parseFloat(typeAmount)
        // reduce the balance
        final =  currentBalance - typeAmount
        console.log(final)
        // update the UI/DOM
        currentBalance = document.getElementById('balance').innerText = final

        
    }
    else{
        console.log( alert("Wrong pin or amount"))
    }
})