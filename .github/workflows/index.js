let apiKey = "851860c98aa0532a7b4edb94"
let apiCalling = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const dropDown1 = document.getElementById("from-Currency")
const dropDown2 = document.getElementById("to-Currency")
const amountInput = document.getElementById("amount");
const convertButton = document.getElementById("convert");
const resultParagraph = document.getElementById("result");

//fetch available currencies from the Api
fetch(apiCalling)
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data.conversion_rates);
    currencies.forEach(currency => {
      dropDown1.innerHTML += `<option value="${currency}">${currency}</option>`;
      dropDown2.innerHTML += `<option value="${currency}">${currency}</option>`;
    });
  })
  .catch(error => {
    console.error("Error fetching exchange rates:", error);
    resultParagraph.innerText = "An error occurred. Please try again later.";
  });

  // Handle currency conversion
convertButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = dropDown1.value;
    const toCurrency = dropDown2.value;
    if (!amount || isNaN(amount)) {
        resultParagraph.innerText = "Please enter a valid amount.";
        return;
      }
  
      // Fetch exchange rates from the API
  fetch(apiCalling)
  .then(response => response.json())
  .then(data => {
    const exchangeRate = data.conversion_rates[toCurrency];
    const result = (amount * exchangeRate).toFixed(2);
    resultParagraph.innerText = `${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`;
  })
  .catch(error => {
    console.error("Error fetching exchange rates:", error);
    resultParagraph.innerText = "An error occurred. Please try again later.";
  });
});