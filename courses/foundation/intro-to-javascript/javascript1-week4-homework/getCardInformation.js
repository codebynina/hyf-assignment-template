function getCardInfo(num) {
  const digits = num.toString();

  if (
    digits[0] === "4" &&
    (digits.length === 13 || digits.length === 16 || digits.length == 19)
  ) {
    return "visa";
  } else if (
    (digits.slice(0, 2) >= "51" && digits.slice(0, 2) <= "55") ||
    (digits.slice(0, 4) >= "2221" && digits.slice(0, 4) <= "2720")
  ) {
    return "mastercard";
  } else if (
    (digits.startsWith("34") || digits.startsWith("37")) &&
    digits.length === 15
  ) {
    return "amex";
  } else if (
    (digits.startsWith("6011") ||
      digits.startsWith("65") ||
      (digits.slice(0, 3) >= "644" && digits.slice(0, 3) <= "649")) &&
    digits.length === 16
  ) {
    return "discover";
  }
  return "unknown";
}

console.log(getCardInfo(378282246310006));
console.log(getCardInfo(4111111111111111));
console.log(getCardInfo(5600000000000003));
console.log(getCardInfo(5100000000000008));
console.log(getCardInfo(6442737730005038));
console.log(getCardInfo(2221406897236269));
