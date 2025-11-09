// exercise 1
const LOCAL_SHIPPING_RATE = 0.5;
const REGIONAL_SHIPPING_RATE = 0.8;
const NATIONAL_SHIPPING_RATE = 1.2;
const BASE_FEE = 100;

function calculateDeliveryCost(distanceKm, basePrice) {
  let shippingCost;

  if (distanceKm > 0 && distanceKm <= 50) {
    shippingCost = BASE_FEE + distanceKm * LOCAL_SHIPPING_RATE;
  } else if (distanceKm > 50 && distanceKm <= 200) {
    shippingCost = BASE_FEE + distanceKm * REGIONAL_SHIPPING_RATE;
  } else if (distanceKm > 200) {
    shippingCost = BASE_FEE + distanceKm * NATIONAL_SHIPPING_RATE;
  } else {
    return null;
  }
  return basePrice + shippingCost;
}
function finalizeOrder(finalPrice) {
  if (finalPrice !== null) {
    console.log("The order has been successfully created!");
    console.log(
      "The total price, including delivery is: " +
        finalPrice.toFixed(2) +
        " denars."
    );
  } else {
    console.log(
      "Error: Unable to calculate shipping cost due to invalid distance."
    );
  }
}

const itemPrice = 5000;
const deliveryDistance = 150;

const totalPrice = calculateDeliveryCost(deliveryDistance, itemPrice);
finalizeOrder(totalPrice);
console.log("--------------------------");
// example for shorter destination
const totalPrice2 = calculateDeliveryCost(25, 1200);
finalizeOrder(totalPrice2);
console.log("--------------------------");
// example3
const totalPrice3 = calculateDeliveryCost(0, 1000);
finalizeOrder(totalPrice3);
console.log("--------------------------");
// exercise 2
function calculateGrade(testpoints, numberofbugs, success) {
  let gradeMessage;

  if (success && testpoints > 90 && numberofbugs === 0) {
    gradeMessage = "Grade: A+ (Excellent)";
  } else if (testpoints > 80 && numberofbugs <= 5) {
    gradeMessage = "Grade: A (Very Good)";
  } else if (success || testpoints > 70) {
    gradeMessage = "Grade: B (Solid)";
  } else {
    gradeMessage = "Grade: C (Needs Improvement)";
  }
  return gradeMessage;
}
let points1 = 98;
let bugs1 = 0;
let success1 = true;
let resultGrade1 = calculateGrade(points1, bugs1, success1);
console.log("Your grade is:" + resultGrade1);
console.log("--------------------------");
let points2 = 71;
let bugs2 = 5;
let success2 = false;
let resultGrade2 = calculateGrade(points2, bugs2, success2);
console.log("Your grade is:" + resultGrade2);
console.log("--------------------------");
// exercise 3
function checkWeather(temperature, humidity, isRaining) {
  let weatherMessage;

  if (temperature >= 30 && humidity > 70) {
    weatherMessage = "Heat Alert! Be careful outside!";
  } else if (temperature >= 25 && !isRaining) {
    weatherMessage = "It's a great day! Let's go to the park.";
  } else if (temperature < 10 || isRaining) {
    weatherMessage = "Very cold weather. Stay home!";
  } else {
    weatherMessage = "Pleasant weather. Enjoy the day!";
  }
  return weatherMessage;
}

let forecast1 = checkWeather(32, 75, false);
console.log(" Weather today: " + forecast1);
console.log("--------------------------");

let forecast2 = checkWeather(9, true);
console.log(" Weather today: " + forecast2);

console.log("--------------------------");

// objects:
// clothes
let sportsClothing1 = {
  brand: "Nike",
  clothing: "Leggings",
  performanceAndFunction: "Breathability, stretch and recovery, quick-drying",
  styleAndComfort: "Comfortable",
  priceInDenars: 1999,
};
let sportsClothing2 = {
  brand: "Oysho",
  clothing: "Leggings",
  performanceAndFunction: "Breathability, compressive, warm",
  styleAndComfort: "Comfortlux",
  priceInDenars: 2200,
};
//  perfumes
let perfume1 = {
  brand: "Olympéa Rabanne",
  topNotes: "Water Jasmine, Green Mandarin, Ginger flower",
  middleNotes: "Vanilla, Salt",
  baseNotes: "Cashmere Wood, Ambergris, Sandalwood",
  priceInEuro: 160,
};
let perfume2 = {
  brand: "Mont Blanc Signature",
  topNotes: "Clementine",
  middleNotes: "Magnolia, Ylang-Ylang, Peony",
  baseNotes: "Vanilla, White Musk, Benzoin",
  priceInEuro: 95,
};
let perfume3 = {
  brand: "Versace Dylan Blue",
  topNotes: "Granny Smith apple, Black Currant, Clover, Forget me not, Shiso",
  middleNotes: "Peach, Petalia, Rose Hip, Hip, Jasmine",
  baseNotes: "Musk, White Woods, Patchouli, Styrax",
  priceInEuro: 130,
};
console.log(sportsClothing2);
console.log(sportsClothing2.brand);
console.log("--------------------------");

console.log(perfume3);
