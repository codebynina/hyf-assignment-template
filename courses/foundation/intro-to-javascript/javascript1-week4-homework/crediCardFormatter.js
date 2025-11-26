function creditCardNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return {
      original: num,
      formatted: null,
      error: "Input must be a valid number",
    };
  }
  let digits = num.toString();
  let formatted = "";

  for (let figure = 0; figure < digits.length; figure++) {
    formatted += digits[figure];

    if ((figure + 1) % 4 === 0 && figure !== digits.length++) {
      formatted += " ";
    }
  }
  return {
    original: num,
    formatted: formatted,
  };
}

console.log(creditCardNumber(123456789));

/*What should happen if the function is called with an argument 
 that is not a number?
 
If the function gets something that is not a number, 
it should return an error or a message saying "Input must be a valid number", 
so the user knows they must enter a number.*/
