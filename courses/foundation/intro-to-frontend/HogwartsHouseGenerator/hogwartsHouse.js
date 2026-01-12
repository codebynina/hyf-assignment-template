const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("nameInput");
const appointBtn = document.getElementById("appointBtn");
const retryBtn = document.getElementById("retryBtn");
const result = document.getElementById("result");

function getRandomHouse() {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}

function assignHouse() {
  const name = nameInput.value.trim();

  if (name === "") {
    result.textContent = "Please enter your name first!";
    result.classList.add("error");
    return;
  }

  result.classList.remove("error");
  const house = getRandomHouse();
  result.textContent = `${name} belongs in ${house}!`;
}

appointBtn.addEventListener("click", assignHouse);
retryBtn.addEventListener("click", assignHouse);
