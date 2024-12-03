
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault()
   
    typePin = document.getElementById("input-cash-out-pin").value
    typeAmount = document.getElementById('input-cash-out').value
    if( typePin === "1010" && typeAmount > 0 ){
        currentBalance = document.getElementById('balance').innerText
        currentBalance = parseFloat(currentBalance)
        typeAmount = parseFloat(typeAmount)
        final =  currentBalance - typeAmount
        console.log(final)
        currentBalance = document.getElementById('balance').innerText = final

        
    }
    else{
        console.log( alert("Wrong pin or amount"))
    }
})