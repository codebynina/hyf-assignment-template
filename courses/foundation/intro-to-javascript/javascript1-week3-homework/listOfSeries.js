const listOfSeries = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: "Attack on Titan",
    days: 2,
    hours: 23,
    minutes: 32,
  },
  {
    title: "The Wire",
    days: 5,
    hours: 10,
    minutes: 32,
  },
];

const lifeSpan = 80;

function seriesDurations(listOfSeries, lifeSpan) {
  let totalMinutesWatched = 0;
  let lifespanMinutes = lifeSpan * 365 * 24 * 60;
  for (let i = 0; i < listOfSeries.length; i++) {
    const series = listOfSeries[i];

    let seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    totalMinutesWatched += seriesMinutes;
    let percentage = (seriesMinutes / lifespanMinutes) * 100;
    console.log(`${series.title} took ${percentage.toFixed(2)}% of my life`);
  }
  let totalPercentage = (totalMinutesWatched / lifespanMinutes) * 100;
  console.log(
    `In total, all series took ${totalPercentage.toFixed(2)}% of my life .`
  );
}

seriesDurations(listOfSeries, lifeSpan);
