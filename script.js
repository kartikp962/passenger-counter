// document.getElementById("count").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;

// let count = 5;
// count = count + 1; // 5+1 = 6
// console.log(count);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints += 50;
// console.log(bonusPoints);

// bonusPoints -= 75;
// console.log(bonusPoints);

// bonusPoints += 45;
// console.log(bonusPoints);


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");  // pass in arguments
// console.log(countEl)
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  // console.log(count);
  countEl.textContent = 0;
  count = 0;
}


// let username = "per";
// let message = "You have three new notifications";
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);


// let name = "Kartik";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);


// let welcomeEl = document.getElementById("welcome-el");
// let name = "Kartik";
// let greeting = "Welcome back ";
// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += "👋";


// function num() {
//   console.log("42");
// }

// num();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function sum() {
//   let total = lap1 + lap2 + lap3;
//   console.log(total);
// }

// sum();

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
// function lapIncrement() {
//   lapsCompleted += 1;

// }

// lapIncrement();
// lapIncrement();
// lapIncrement();
// console.log(lapsCompleted);



// let myAge = 21;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// 1. Create a variable, myAge, and set its value to your age
// let myAge = 21;
// 2. Log the myAge variable to the console
// console.log(myAge);