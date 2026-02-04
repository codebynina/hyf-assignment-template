let userName = "";
let todos = [];

function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    let name = command.split(" ").pop();

    if (userName) {
      return `You've already introduced yourself as ${userName}.`;
    }

    userName = name;
    return `Nice to meet you, ${userName}`;
  } else if (command === "What is my name?") {
    if (userName) {
      return `Your name is ${userName}`;
    } else {
      return "I don't know your name yet.";
    }
  } else if (command.startsWith("Add") && command.endsWith("to my todo")) {
    let task = command.slice(4, -10).trim();
    todos.push(task);
    return `${task} added to your todo`;
  } else if (command.startsWith("Remove") && command.endsWith("from my todo")) {
    let task = command.slice(7, -13).trim();
    let index = todos.indexOf(task);

    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${task} from your todo`;
    }

    return `${task} is not in your to do list.`;
  } else if (command === "What is on my todo?") {
    if (todos.length > 0) {
      return `You have ${todos.length} todos: ${todos.join(", ")}`;
    }
    return "Your todo list is empty.";
  } else if (command === "What day is it today?") {
    return new Date().toDateString();
  } else if (command.startsWith("What is")) {
    try {
      let expression = command.slice(8).trim();
      let result = new Function(`return ${expression}`)();
      return `${result}`;
    } catch {
      return "I can't calculate that.";
    }
  } else if (command.startsWith("Set a timer for")) {
    let parts = command.split(" ");
    let minutes = parseInt(parts[3]);

    if (!isNaN(minutes) && minutes > 0) {
      setTimeout(() => console.log("Timer done!"), minutes * 60000);
      return `Timer set for ${minutes} minute(s).`;
    }

    return "Please give a valid time.";
  } else if (command === "What time is it?") {
    return new Date().toLocaleTimeString();
  } else if (command.startsWith("Repeat")) {
    let phrase = command.slice(7).trim();

    if (phrase.toLowerCase() === "hello") {
      return `Welcome, ${userName}!`;
    }

    if (phrase.length === 0) {
      return "You didn't give me anything to repeat!";
    }

    return `${phrase}`;
  } else {
    return "Sorry, I don't understand that command.";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("Set a timer for 1 minute"));
console.log(getReply("What time is it?"));
console.log(getReply("Repeat Hello"));
console.log(getReply("Repeat I am learning JavaScript!"));

/*Key Issue Encountered

Math evaluation using new Function is blocked by modern browser security (CSP / TrustedScript), so commands like "What is 3 + 3?" fail.*/
