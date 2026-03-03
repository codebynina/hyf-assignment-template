
const dogYearOfBirth = 2021;
const dogYearFuture = 2040;
const shouldShowResultInDogYears = true;

const dogYear = dogYearFuture - dogYearOfBirth;
const dogAge = shouldShowResultInDogYears? dogYear * 7 : dogYear;
const type = shouldShowResultInDogYears ? "dog" : "human";

console.log(`Your dog will be ${dogAge} ${type} years old in ${dogYearFuture}`);
