let firstWords = ['Nexa','Lumo','Astra','Verde','Orbi','Pulse','Kairo','Strive','Fluxa','Vanta'];
let secondWords = ['Echo', 'Solvi', 'Prism','Nova','Clio','Zyra','Mira','Forge','Alto','Drift'];

const randomNumber1 = Math.floor(Math.random() * 8);
const randomNumber2 = Math.floor(Math.random() * 5);

const startupName = `${firstWords[randomNumber1]}${secondWords[randomNumber2]}`;

console.log(`The startup: ${startupName} contains ${startupName.length} characters.`);