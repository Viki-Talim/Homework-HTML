let score = 90;
if (score >= 95) {
  console.log("A");
} else if (score >= 85) {
  console.log("B");
} else if (score >= 75) {
  console.log(C);
} else if (score >= 65) {
  console.log("D");
} else {
  console.log("F");
}

console.log("--------------");

let newuser = false;
let totalamount = 6000;
let hascoupon = false;

if ((newuser && totalamount >= 1000) || hascoupon || totalamount > 5000) {
  console.log("Get discount");
} else {
  console.log("No discount");
}

console.log("--------------");

let testpoints = 95;
// razlicen print 90 / 71 / 60
let numberofbugs = 0;
// 0 / 10 / 12
let success = true;
// true/false/false
if (success && testpoints > 90 && numberofbugs === 0) {
  console.log("Grade: A+ (Excellent)");
} else if (testpoints > 80 && numberofbugs <= 5) {
  console.log("Grade: A (Very Good)");
} else if (success || testpoints > 70) {
  console.log("Grade: B (Solid)");
} else {
  console.log("Grade: C (Needs Improvement)");
}

console.log("--------------");

let temperature = 22;
let humidity = 30;
let israining = false;
if (temperature >= 30 && humidity > 70) {
  console.log("Heat Alert! Be carefull outside!");
} else if (temperature >= 25 && !israining) {
  console.log("It's a great day! Let's go to the park.");
} else if (temperature < 10 || israining) {
  console.log("Very cold weather. Stay home!");
} else {
  console.log("Pleasant weather. Enjoy the day!");
}

console.log("--------------");

let number = 14;
if (number > 0) {
  console.log(number + " is a positive number. ");
} else if (number < 0) {
  console.log(number + " is a negative number. ");
} else {
  console.log(number + ",is zero");
}
if (number % 7 === 0) {
  console.log(number + " can be divisible with zero. ");
} else {
  console.log(number + " cannot be divisible with seven. ");
}
