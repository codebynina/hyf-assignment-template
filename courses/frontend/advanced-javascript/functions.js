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
