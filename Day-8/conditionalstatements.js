// Check whether a person is eligible to vote
let age = 19;

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

// Check whether a number is divisible by 5
let number = 25;

if (number % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not Divisible by 5");
}

// Find the smaller of two numbers
let x = 18;
let y = 27;

if (x < y) {
  console.log(x + " is smaller");
} else if (y < x) {
  console.log(y + " is smaller");
} else {
  console.log("Both numbers are equal");
}

// Find the smallest of three numbers
let num1 = 45;
let num2 = 12;
let num3 = 30;

if (num1 <= num2 && num1 <= num3) {
  console.log(num1 + " is the smallest");
} else if (num2 <= num1 && num2 <= num3) {
  console.log(num2 + " is the smallest");
} else {
  console.log(num3 + " is the smallest");
}

// Grade Calculation
let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}