document.addEventListener("DOMContentLoaded", function() {
    const billTotalInput = document.getElementById('billTotal');
    const tipInput = document.getElementById('tip');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalBillWithTipInput = document.getElementById('totalBillWithTip');

    const form = document.getElementById('tipForm');

    form.addEventListener('input', function() {
        let bill = parseFloat(billTotalInput.value);
        let tipPercentage = tipInput.value;
        
        if (isNaN(bill)) {
            alert('Please enter a valid number for the bill total.');
            return;
        }
        
        tipPercentageInput.value = tipPercentage;
        let tipAmount = (bill * tipPercentage) / 100;
        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillWithTipInput.value = (bill + tipAmount).toFixed(2);
    });
});

function refreshPage() {
    window.location.reload();
}

function showNotification() {
    function showNotification() {
    const billTotalInput = document.getElementById('billTotal');
    if (billTotalInput.value === '' || billTotalInput.value === null) {
        alert('Please enter the bill total.');
    } else {
        alert('Paid successfully');
    }
}
}
