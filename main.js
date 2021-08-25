function calcAmount() {
  
  let price = 1300;
  let amountInput = document.querySelector("input[name=quantity]");
  let totalPrice = document.querySelector("span.totalPrice");
  amount = parseInt(amountInput.value) * parseInt(price);

  totalPrice.innerHTML = amount;
}