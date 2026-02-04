function whatToWear(temperature) {
  if (temperature >= 25) {
    return "shorts and a t-shirt";
  } else if (temperature >= 15) {
    return "light jacket and jeans";
  } else {
    return "warm coat, scarf, and gloves";
  }
}

console.log(whatToWear(18));
console.log(whatToWear(30));
