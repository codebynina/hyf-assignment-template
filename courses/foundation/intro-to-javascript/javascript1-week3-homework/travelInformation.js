const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(info) {
  const decimalHours = info.destinationDistance / info.speed;

  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = getTravelTime(travelInformation);
console.log(travelTime);
