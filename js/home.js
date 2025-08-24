document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('add money button clicked')
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = document.getElementById('add-pin').value
    console.log(bank,accountNumber,amount,pin)
    const avilableBlance = parseInt(document.getElementById('avilabel-blance').innerText)

    const totalAvilableBlance = amount + avilableBlance
    document.getElementById('avilabel-blance').innerText = totalAvilableBlance
})