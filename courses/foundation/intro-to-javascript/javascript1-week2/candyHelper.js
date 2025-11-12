const candyMenu = [];
const candyPrices = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  Gum: 0.03,
};

function addCandy(candyType, weight) {
  const pricePerGram = candyPrices[candyType];
  if (!pricePerGram) {
    return `Candy type does not exist.`;
  } else {
    const totalPrice = pricePerGram * weight;
    candyMenu.push(totalPrice);
    console.log(`Added ${weight}g of ${candyType} for ${totalPrice}`);
  }
}
const amountToSpend = 50;

function canBuyMoreCandy() {
  let totalSpent = 0;
  for (let index = 0; index < candyMenu.length; index++) {
    const price = candyMenu[index];

    totalSpent += price;
  }
  if (totalSpent < amountToSpend) {
    return true;
  } else return false;
}

let canBuyMore = canBuyMoreCandy();
if (canBuyMore) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
