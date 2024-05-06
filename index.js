const billInput = document.querySelector("#total-bill");
const tipInput = document.querySelector("#total-tip");
const decreaseBtn = document.querySelector("#decreaseBtn");
const increaseBtn = document.querySelector("#increaseBtn");
const billPerPersonContainer = document.querySelector("#billPerPerson");
const peopleCountContainer = document.querySelector("#numberOfPeople");
let peopleCount = Number(peopleCountContainer.innerText);

function calculateBill() {
  let billAmount = Number(billInput.value);
  let tipPercent = Number(tipInput.value) / 100;
  let tipAmount = billAmount * tipPercent;
  let totalBillPerPerson = (billAmount + tipAmount) / peopleCount;
  billPerPersonContainer.innerHTML = `$${totalBillPerPerson.toFixed(2)}`;
}

increaseBtn.addEventListener("click", () => {
  peopleCount += 1;
  peopleCountContainer.innerText = peopleCount;
  calculateBill();
});

decreaseBtn.addEventListener("click", () => {
  if (peopleCount <= 1) {
    return;
  } else {
    peopleCount -= 1;
    peopleCountContainer.innerText = peopleCount;
    calculateBill();
  }
});
