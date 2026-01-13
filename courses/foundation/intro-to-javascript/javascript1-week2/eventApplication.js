function getEventWeekday(daysUntilEvent) {
  const listOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const eventDayIndex = (today + daysUntilEvent) % 7;

  return listOfDays[eventDayIndex];
}
getEventWeekday(9);
getEventWeekday(2);
