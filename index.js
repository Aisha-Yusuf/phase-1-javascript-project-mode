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

document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const showFeedbackButton = document.getElementById("showFeedbackForm");
    const thumbsUpButton = document.getElementById("thumbsUpButton");
    const thumbsDownButton = document.getElementById("thumbsDownButton");
    const userFeedbackForm = document.getElementById("userFeedbackForm");

    // Function to show the feedback form
    function showFeedbackForm() {
        feedbackForm.style.display = "block";
    }

    // Event listeners for buttons
    showFeedbackButton.addEventListener("click", showFeedbackForm);

    thumbsUpButton.addEventListener("click", () => {
        alert("Thank you for your positive feedback!");
        feedbackForm.style.display = "none";
    });

    thumbsDownButton.addEventListener("click", () => {
        alert("We're sorry to hear that. Please provide your feedback below.");
        userFeedbackForm.style.display = "block";
    });

    // Handle form submission
    userFeedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const feedbackText = document.getElementById("feedback").value;
        alert("Thank you for your feedback: " + feedbackText);
        userFeedbackForm.style.display = "none";
    });
});

