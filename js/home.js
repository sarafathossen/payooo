
const validPin = 1234
const ValidAccNumber = 12345678910
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('add money button clicked')
    const bank = document.getElementById('bank').value
    const accountNumber = parseInt(document.getElementById("account-number").value)
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById('add-pin').value)
    console.log(bank,accountNumber,amount,pin)
    const avilableBlance = parseInt(document.getElementById('avilabel-blance').innerText)

    if(ValidAccNumber !== accountNumber){
        alert('Provide Correct Account Number')
        return
    }
    if(pin !== validPin){
        alert('Please Provide Vallid Pin Number')
        return
    }


    const totalAvilableBlance = amount + avilableBlance
    document.getElementById('avilabel-blance').innerText = totalAvilableBlance
})



// Togolling Feature 
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById("cash-out-parent").style.display = 'none'
    document.getElementById("add-money-parent").style.display = 'block'
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById("add-money-parent").style.display = 'none'
    document.getElementById("cash-out-parent").style.display = 'block'
    
})