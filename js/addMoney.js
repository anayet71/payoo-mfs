document.getElementById
document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault()
    addMoney = document.getElementById('input-add-money').value
    pinNumber = document.getElementById('input-pin-number').value

    if(pinNumber === "1010" && addMoney > 0 ){
        currentBalance = document.getElementById('balance').innerText     
        currentBalance = parseFloat(currentBalance)
           addMoney = parseFloat(addMoney)
        totalAmount = currentBalance + addMoney
        console.log( totalAmount)
        document.getElementById('balance').innerText = totalAmount
    
    }
    else{
        console.log(alert('Wrong pin or amount'))
    }
    
})