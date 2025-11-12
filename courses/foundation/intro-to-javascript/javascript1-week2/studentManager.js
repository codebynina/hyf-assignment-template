const class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName.trim()) {
    console.log(`You cannot add an empty name to the class.`);
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
  } else if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log(`You cannot add more student to the class 07`);
  } else {
    class07Students.push(studentName);
    console.log(`Student ${studentName} added to the class.`);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

let numberOfStudents = getNumberOfStudents();

addStudentToClass("Eddie");
addStudentToClass("Eddie");
addStudentToClass("Clara");
addStudentToClass("Mona");
addStudentToClass("Ron");
addStudentToClass("John");
addStudentToClass("Harry");
addStudentToClass("Co");
addStudentToClass("Marcos");
addStudentToClass("Romuladez");
addStudentToClass("Queen");
