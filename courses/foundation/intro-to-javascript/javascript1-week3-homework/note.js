const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Grocerries.", 1);
saveNote("Do Laundry.", 2);
saveNote("Dog walk.", 3);
console.log(notes);

function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("Error: id must be a number");
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  return "Note not found";
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotes() {
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    console.log(
      `The note id:${note.id}, has the following note text: ${note.content} `
    );
  }
}

logOutNotes();
