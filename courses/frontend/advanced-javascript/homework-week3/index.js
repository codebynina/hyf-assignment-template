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
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Problem with fetching data");
    }

    const data = await response.json();

    allRates = data.rates;

    showCurrencies();
    setStartValues();
    updateMoney();
  } catch (error) {
    console.log("Error:", error);
    resultText.textContent = "Could not load exchange rates";
  }
}
function showCurrencies() {
  const moneyList = Object.keys(allRates); // review Object.keys
  for (let i = 0; i < moneyList.length; i++) {
    const money = moneyList[i];

    const option1 = document.createElement("option");
    option1.value = money;
    option1.textContent = money;
    fromSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = money;
    option2.textContent = money;
    toSelect.appendChild(option2);
  }
}

function setStartValues() {
  fromSelect.value = "EUR";
  toSelect.value = "DKK";
  fromInput.value = 1;
}

function updateMoney() {
  const fromMoney = fromSelect.value;
  const toMoney = toSelect.value;

  const fromRate = allRates[fromMoney];
  const toRate = allRates[toMoney];

  if (!fromRate || !toRate) {
    return;
  }
  if (lastChanged === "from") {
    const fromAmount = Number(fromInput.value) || 0;
    const answer = (fromAmount / fromRate) * toRate;
    toInput.value = answer.toFixed(2);
  } else {
    const toAmount = Number(toInput.value) || 0;
    const answer = (toAmount / toRate) * fromRate;
    fromInput.value = answer.toFixed(2);
  }
  showText();
}

function showText() {
  const fromMoney = fromSelect.value;
  const toMoney = toSelect.value;

  const fromRate = allRates[fromMoney];
  const toRate = allRates[toMoney];

  if (!fromRate || !toRate) {
    return;
  }

  const oneRate = toRate / fromRate;

  resultText.textContent = `1 ${fromMoney} = ${oneRate.toFixed(4)} ${toMoney}`;

  rateText.textContent = `${fromInput.value || 0} ${fromMoney} = ${toInput.value || 0} ${toMoney}`;
}

fromInput.addEventListener("input", function () {
  lastChanged = "from";
  updateMoney();
});

toInput.addEventListener("input", function () {
  lastChanged = "to";
  updateMoney();
});

fromSelect.addEventListener("change", function () {
  updateMoney();
});

toSelect.addEventListener("change", function () {
  updateMoney();
});

swapBtn.addEventListener("click", function () {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

  updateMoney();
});

getRates();
