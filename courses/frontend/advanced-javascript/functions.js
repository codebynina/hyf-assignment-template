const output = document.getElementById("output");

// 1. Called after 2.5 seconds
document.getElementById("exercise1-btn").addEventListener("click", () => {
  output.innerHTML += "<p>Exercise 1 started...</p>";

  setTimeout(() => {
    output.innerHTML += "<p>Called after 2.5 seconds</p>";
  }, 2500);
});

// 2. Function with delay
const scheduleLog = (delay, stringToLog) => {
  setTimeout(() => {
    output.innerHTML += `<p>${stringToLog}</p>`;
  }, delay * 1000);
};

document.getElementById("exercise2-btn").addEventListener("click", () => {
  scheduleLog(1, "This string logged after 1 second.");
});

// 4. Button → log after 5 seconds
const earthLogger = () => {
  output.innerHTML += "<p>Earth</p>";
};

const saturnLogger = () => {
  output.innerHTML += "<p>Saturn</p>";
};

const logPlanet = (planetLogFunction) => {
  planetLogFunction();
};

document.getElementById("exercise4-btn").addEventListener("click", () => {
  logPlanet(earthLogger);
  logPlanet(saturnLogger);
});

// 5. Location
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        output.innerHTML += `<p>Latitude: ${lat}, Longitude: ${lon}</p>`;
      },
      () => {
        output.innerHTML += "<p>Could not get location</p>";
      },
    );
  } else {
    output.innerHTML += "<p>Geolocation not supported</p>";
  }
};

document.getElementById("exercise5-btn").addEventListener("click", getLocation);

// 7. runAfterDelay
const runAfterDelay = (delay, callback) => {
  setTimeout(callback, delay * 1000);
};

document.getElementById("exercise7-btn").addEventListener("click", () => {
  runAfterDelay(3, () => {
    output.innerHTML += "<p>Logged after 3 seconds</p>";
  });
});

// 8. Double click
document.getElementById("exercise8-btn").addEventListener("dblclick", () => {
  output.innerHTML += "<p>Double click!</p>";
});

// 9. Joke creator
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

const funnyJoke = () => {
  output.innerHTML +=
    "<p>My teachers told me my procrastination would keep me from being successful. I told them, 'Just you wait!' 😂</p>";
};

const badJoke = () => {
  output.innerHTML +=
    "<p>Why did the computer go to the doctor? It had a virus! 😐</p>";
};

document.getElementById("exercise9-funny-btn").addEventListener("click", () => {
  jokeCreator(true, funnyJoke, badJoke);
});

document.getElementById("exercise9-bad-btn").addEventListener("click", () => {
  jokeCreator(false, funnyJoke, badJoke);
});

// Clear output
document.getElementById("clear-btn").addEventListener("click", () => {
  output.innerHTML = "";
});
