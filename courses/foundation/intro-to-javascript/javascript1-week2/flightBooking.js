function getFullName(firstName, surname, useFormalName, gender) {
  if (useFormalName === true && gender === "male") {
    return `Lord ${firstName} ${surname}`;
  } else if (useFormalName === true && gender === "female") {
    return `Ms. ${firstName} ${surname}`;
  } else {
    return `${firstName} ${surname}`;
  }
}

let getFullName1 = getFullName("Benjamin", "Hughes", true, "male");
let getFullName2 = getFullName("Jane", "Doe", true, "female");

console.log(getFullName1);
console.log(getFullName2);
