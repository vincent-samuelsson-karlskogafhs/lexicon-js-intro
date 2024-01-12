// In this file we can write our code

const firstName = "Niklas";
const lastName = "Fähnrich";

const greeting = `Hello ${firstName} ${lastName}! How are you doing?`;

console.log(greeting); // Hello Niklas Fähnrich! How are you doing?


const age = prompt("How old are you?");

const ageAsNumber = parseInt(age);

if (age >= 80) {
  alert("You are blue");
} else if (age >= 50) {
  alert("You are red");
} else if (age >= 30) {
  alert("You are yellow");
} else if (age >= 10) {
  alert("You are green");
} else if (age >= 0) {
  alert("You are brown");
} else {
  alert("You don't exists, you deserve no color");
}