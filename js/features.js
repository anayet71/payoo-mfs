// Unhide cash-out form and hide add to the add-money form
document.getElementById("cashOutBtn").addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById("add-money-form").classList.add('hidden')
})
// Unhide add-money form and hide cash-out form
document.getElementById("addMoneyBtn").addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById("cash-out-form").classList.add('hidden')
})