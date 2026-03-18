const output = document.getElementById("output");

// 1. Called after 2.5 seconds
document.getElementById("btn1").addEventListener("click", () => {
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

document.getElementById("btn2").addEventListener("click", () => {
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

document.getElementById("btn3").addEventListener("click", () => {
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

document.getElementById("btn4").addEventListener("click", getLocation);

// 7. runAfterDelay
const runAfterDelay = (delay, callback) => {
  setTimeout(callback, delay * 1000);
};

document.getElementById("btn5").addEventListener("click", () => {
  runAfterDelay(3, () => {
    output.innerHTML += "<p>Logged after 3 seconds</p>";
  });
});

// 8. Double click
document.getElementById("btn6").addEventListener("dblclick", () => {
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

document.getElementById("btn7").addEventListener("click", () => {
  jokeCreator(true, funnyJoke, badJoke);
});

document.getElementById("btn8").addEventListener("click", () => {
  jokeCreator(false, funnyJoke, badJoke);
});

const gameTimeInput = document.getElementById("game-time");
const startGameButton = document.getElementById("start-game");
const countS = document.getElementById("count-s");
const countL = document.getElementById("count-l");
const gameStatus = document.getElementById("game-status");
const winner = document.getElementById("winner");

let sPresses = 0;
let lPresses = 0;
let gameRunning = false;

const handleKeyPress = (event) => {
  if (!gameRunning) {
    return;
  }

  if (event.key === "s") {
    sPresses++;
    countS.textContent = sPresses;
  } else if (event.key === "l") {
    lPresses++;
    countL.textContent = lPresses;
  }
};

const startGame = () => {
  const gameDuration = Number(gameTimeInput.value);

  if (gameDuration <= 0) {
    gameStatus.textContent = "Please enter a valid number";
    return;
  }

  sPresses = 0;
  lPresses = 0;
  countS.textContent = 0;
  countL.textContent = 0;
  winner.textContent = "";
  gameStatus.textContent = "Game started!";
  gameRunning = true;

  setTimeout(() => {
    gameRunning = false;
    gameStatus.textContent = "Time's up!";

    if (sPresses > lPresses) {
      winner.textContent = "S wins!";
    } else if (lPresses > sPresses) {
      winner.textContent = "L wins!";
    } else {
      winner.textContent = "It's a draw!";
    }
  }, gameDuration * 1000);
};

startGameButton.addEventListener("click", startGame);
document.addEventListener("keydown", handleKeyPress);

// Clear output
document.getElementById("btn9").addEventListener("click", () => {
  output.innerHTML = "";
});
