const button = document.getElementById("calculate");
const displayBill = document.getElementById("total-bill-amount");
const displayTip = document.getElementById("tip-amount");
const displayTippp = document.getElementById("tip-pp-amount");
const displayTotalpp = document.getElementById("total-pp-amount");
function calc() {
  const bill = parseInt(document.getElementById("billamount").value);
  const tip = parseInt(document.getElementById("tippercentage").value);
  const persons = parseInt(document.getElementById("persons").value);
  console.log(bill);
  if (
    isNaN(bill) ||
    isNaN(tip) ||
    isNaN(persons) ||
    persons <= 0 ||
    tip < 0 ||
    persons < 0
  ) {
    document.getElementById("billamount").value = "";
    document.getElementById("tippercentage").value = "15";
    document.getElementById("persons").value = "1";
    return alert("Please enter valid input");
  }
  const tipAmount = bill * (tip / 100);
  const totalBill = bill + tipAmount;
  const tippp = tipAmount / persons;
  const totalpp = totalBill / persons;

  displayBill.textContent = `${totalBill.toFixed(2)}`;
  displayTip.textContent = `${tipAmount.toFixed(2)}`;
  displayTippp.textContent = `${tippp.toFixed(2)}`;
  displayTotalpp.textContent = `${totalpp.toFixed(2)}`;
}

button.addEventListener("click", calc);
// document.getElementById("billamount").addEventListener("input", calc);
