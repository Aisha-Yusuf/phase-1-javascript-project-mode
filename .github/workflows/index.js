let apiKey = "851860c98aa0532a7b4edb94"
let apiCalling = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const dropDown1 = document.getElementById("from-Currency")
const dropDown2 = document.getElementById("to-Currency")
const amountInput = document.getElementById("amount");
const convertButton = document.getElementById("convert");
const resultParagraph = document.getElementById("result");