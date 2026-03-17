//1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//2.Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created

scheduleLog = (delay, stringToLog) => {
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
