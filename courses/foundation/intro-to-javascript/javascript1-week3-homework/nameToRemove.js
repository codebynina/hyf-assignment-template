const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

function listOfNames(names, nameToRemove) {
  const index = names.indexOf(nameToRemove);
  if (index !== -1) {
    names.splice(index, 1);
  }
}

listOfNames(names, nameToRemove);
console.log(names);
