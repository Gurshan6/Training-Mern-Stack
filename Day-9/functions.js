function checkNumber(num) {
  if (num >= 0) {
    console.log("Positive Number");
  } else {
    console.log("Negative Number");
  }
}

checkNumber(15);

function findSquare(num) {
  return num * num;
}

console.log(findSquare(6));

const kilometerToMeter = (km) => {
  return km * 1000;
};

console.log(kilometerToMeter(5));

const countWords = (sentence) => {
  return sentence.split(" ").length;
};

console.log(countWords("JavaScript is easy to learn"));

function firstCharacter(str) {
  return str[0];
}

console.log(firstCharacter("Programming"));

function findMaximum(a, b) {
  return Math.max(a, b);
}

console.log(findMaximum(25, 40));