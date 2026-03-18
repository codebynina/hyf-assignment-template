//1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//2.Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created

const scheduleLog = (delay, stringToLog) => {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
};

scheduleLog(1, "This string logged after 1 second.");

//4.Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  scheduleLog(5, "Called after 5 seconds");
});

/*
4.Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. 
Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.*/

const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

const logPlanet = (planetLogFunction) => {
  planetLogFunction();
};
logPlanet(earthLogger);
logPlanet(saturnLogger);

/*5.Create a button with the text called "Log location".
 When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api.*/

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
const locationButton = document.getElementById("location-btn");
locationButton.addEventListener("click", getLocation);

/* 7.Create a function called runAfterDelay. 
It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. 
Try and call this function with different delays and different callback functions. */

let runAfterDelay = (delay, callback) => {
  setTimeout(() => {
    callback();
  }, delay * 3000);
};
runAfterDelay(3, function () {
  console.log("Should be logged after 3 second.");
});

/*8.
Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!" */

const doubleClickButton = document.getElementById("dbl-click");
let lastClickTimer = 0;

document.addEventListener("click", () => {
  const currentTime = Date.now();
  const timeDifference = currentTime - lastClickTimer;
  if (timeDifference <= 500) {
    console.log("Double Click");
  }
  lastClickTimer = currentTime;
});

/* 
9.Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke (boolean), logFunnyJoke (function), and logBadJoke (function). 
If shouldTellFunnyJoke is true it should call logFunnyJoke, which displays a funny joke on the page. Otherwise it should call logBadJoke, 
which displays a bad joke on the page.
*/

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

jokeCreator(
  true,
  function () {
    console.log(
      "My teachers told me my procrastination would keep me from being successful. I told them, “Just you wait!”",
    );
  },
  function () {
    console.log("Why did the computer go to the doctor? It had a virus!");
  },
);

jokeCreator(
  false,
  function () {
    console.log(
      "My teachers told me my procrastination would keep me from being successful. I told them, “Just you wait!”",
    );
  },
  function () {
    console.log("Why did the computer go to the doctor? It had a virus!");
  },
);

const funnyJoke = () => {
  console.log("This is a funny joke 😂");
};

const badJoke = () => {
  console.log("This is a bad joke 😐");
};

const anotherJoke = () => {
  console.log("Another joke 😆");
};

const jokes = [funnyJoke, badJoke, anotherJoke];

jokes.forEach((jokeFunction) => {
  jokeFunction();
});

jokeCreator(true, funnyJoke, badJoke);
