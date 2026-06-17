const button = document.getElementById("Calculate");
const displayBill = document.getElementById("total-bill-amount");
const displayTip = document.getElementById("tip-amount");
const displayTippp = document.getElementById("tip-pp-amount");
const displayTotalpp = document.getElementById("total-pp-amount");
function calc() {
  const bill = parseFloat(document.getElementById("billamount").value) || 0;
  const tip = parseFloat(document.getElementById("tippercentage").value) || 0;
  const persons = parseFloat(document.getElementById("persons").value) || 1;
  console.log(bill);
  if (persons <= 0 || tip < 0 || bill < 0) {
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

document.getElementById("billamount").addEventListener("input", calc);
document.getElementById("tippercentage").addEventListener("input", calc);
document.getElementById("persons").addEventListener("input", calc);
