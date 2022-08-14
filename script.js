const totalBillAll = document.getElementById('totalBillAll');
const billPerOne = document.getElementById('billPerOne');
const totalTip = document.getElementById('totalTip');
const tipPerOne = document.getElementById('tipPerOne');

const totalBill = document.getElementById('totalBill');
const tipByPercentage = document.getElementById('percentageTip');
const personsTotal = document.getElementById('personsTotal');
const calcBtn = document.getElementById('calc-btn');


function calculateTotalBill() {
    const calculateBill = (calculateTipPerOne() + calculateBillSplit());

    return calculateBill;
}


function calculateBillSplit() {
    const division = (totalBill.value / personsTotal.value);

    return division;
}

function calculateTotalTip() {
    const totalPersonTip = (totalBill.value * tipByPercentage.value / 100 * personsTotal.value);

    return totalPersonTip;
}

function calculateTipPerOne() {
    const tipPerOnePerson = (totalBill.value * tipByPercentage.value / 100);

    return tipPerOnePerson;
}

calcBtn.onclick = function () {
    billPerOne.innerHTML = calculateBillSplit();
    totalTip.innerHTML = calculateTotalTip();
    tipPerOne.innerHTML = calculateTipPerOne();
    totalBillAll.innerHTML = calculateTotalBill();
};