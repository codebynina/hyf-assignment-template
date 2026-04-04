const fromInput = document.getElementById("amount-from");
const toInput = document.getElementById("amount-to");
const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const resultText = document.getElementById("converted-result");
const rateText = document.getElementById("rate-info");
const swapBtn = document.getElementById("swap-btn");

let allRates = {};
let lastChanged = "from";

const url = "https://open.er-api.com/v6/latest/USD";

async function getRates() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Problem with fetching data");
  }

  const data = await response.json();
  return data.rates;
}

function populateCurrencyOptions(rates) {
  const moneyList = Object.keys(rates).sort();

  for (const money of moneyList) {
    const fromOption = document.createElement("option");
    fromOption.value = money;
    fromOption.textContent = money;
    fromSelect.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = money;
    toOption.textContent = money;
    toSelect.appendChild(toOption);
  }
}

function setStartValues() {
  fromSelect.value = "EUR";
  toSelect.value = "DKK";
  fromInput.value = 1;
}

function getSelectedRates(rates) {
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];

  if (!fromRate || !toRate) {
    return null;
  }

  return { fromCurrency, toCurrency, fromRate, toRate };
}

function updateConvertedAmounts(rates) {
  const selectedRates = getSelectedRates(rates);

  if (!selectedRates) {
    return;
  }

  const { fromRate, toRate } = selectedRates;

  if (lastChanged === "from") {
    const fromAmount = Number(fromInput.value) || 0;
    const convertedAmount = (fromAmount / fromRate) * toRate;
    toInput.value = convertedAmount.toFixed(2);
  } else {
    const toAmount = Number(toInput.value) || 0;
    const convertedAmount = (toAmount / toRate) * fromRate;
    fromInput.value = convertedAmount.toFixed(2);
  }

  updateExchangeRateText(rates);
}

function updateExchangeRateText(rates) {
  const selectedRates = getSelectedRates(rates);

  if (!selectedRates) {
    return;
  }

  const { fromCurrency, toCurrency, fromRate, toRate } = selectedRates;
  const oneUnitRate = toRate / fromRate;

  resultText.textContent = `1 ${fromCurrency} = ${oneUnitRate.toFixed(4)} ${toCurrency}`;
  rateText.textContent = `${fromInput.value || 0} ${fromCurrency} = ${toInput.value || 0} ${toCurrency}`;
}

async function initializeApp() {
  try {
    allRates = await getRates();
    populateCurrencyOptions(allRates);
    setStartValues();
    updateConvertedAmounts(allRates);
  } catch (error) {
    console.log("Error:", error);
    resultText.textContent = "Could not load exchange rates";
  }
}

fromInput.addEventListener("input", function () {
  lastChanged = "from";
  updateConvertedAmounts(allRates);
});

toInput.addEventListener("input", function () {
  lastChanged = "to";
  updateConvertedAmounts(allRates);
});

fromSelect.addEventListener("change", function () {
  updateConvertedAmounts(allRates);
});

toSelect.addEventListener("change", function () {
  updateConvertedAmounts(allRates);
});

swapBtn.addEventListener("click", function () {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

  updateConvertedAmounts(allRates);
});

initializeApp();
