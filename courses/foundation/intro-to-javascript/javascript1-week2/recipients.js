const recipients =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
let listOfArrays = recipients.split("|");

function sendEmailTo(recipient) {
  return "email sent to " + recipient;
}
for (let index = 0; index < listOfArrays.length; index++) {
  const element = listOfArrays[index];

  const emailAddress = sendEmailTo(element);
  console.log("email sent to " + emailAddress);
}
