// Domashna 1
const sportsClothing1 = {
  brand: "Nike",
  clothing: "Leggings",
  performanceAndFunction: ["Breathability, stretch and recovery, quick-drying"],
  styleAndComfort: "Comfortable",
  priceInDenars: 1999,
  details: {
    material: "Polyester/Elastane blend",
    careInstructions: "Machine wash cold, do not bleach",
    colorOptions: ["Black", "Grey", "Blue"],
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`Those leggings cost: ${this.priceInDenars} denars`);
    console.log(`We have three colors: ${this.details.colorOptions}`);
  },
};

const sportsClothing2 = {
  brand: "Oysho",
  clothing: "Leggings",
  performanceAndFunction: ["Breathability, compressive, warm"],
  styleAndComfort: "Comfortlux",
  priceInDenars: 2200,
  details: {
    material: "Technical brushed fabric",
    careInstructions: "Wash with similar colors",
    madeIn: "Portugal",
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`Those leggings cost: ${this.priceInDenars} denars`);
    console.log(`The leggings are made in: ${this.details.madeIn}`);
  },
};

const sportsClothing3 = {
  brand: "Adidas",
  clothing: "Sports Bra",
  performanceAndFunction: ["High support, moisture-wicking, adjustable straps"],
  styleAndComfort: "Secure fit, soft material",
  priceInDenars: 2590,
  details: {
    material: "Recycled Polyester Pique",
    closureType: "Hook-and-eye",
    cupSize: "Medium to High Impact",
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`This Sports Bra cost: ${this.priceInDenars} denars`);
    console.log(`The Sports Bra is made of: ${this.details.material}`);
  },
};

const sportsClothing4 = {
  brand: "Puma",
  clothing: "Running T-Shirt",
  performanceAndFunction: [
    "DryCELL technology, lightweight, reflectivity for safety",
  ],
  styleAndComfort: "Loose fit, smooth feel",
  priceInDenars: 1550,
  details: {
    material: "100% Polyester",
    fit: "Regular",
    bestFor: "Summer running",
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`Those leggings cost: ${this.priceInDenars} denars`);
    console.log(`Performance: ${this.performanceAndFunction}`);
  },
};

const sportsClothing5 = {
  brand: "Under Armour",
  clothing: "Hoodie",
  performanceAndFunction: "ColdGear technology, traps heat, quick-drying",
  styleAndComfort: "Kangaroo pocket, relaxed fit",
  priceInDenars: 3800,
  details: {
    material: "Cotton/Fleece blend",
    hoodAdjustable: true,
    lining: "Brushed interior",
  },
  print: function () {
    console.log(`Brand: ${this.brand} ${this.clothing}`);
    console.log(`This Hoodie cost: ${this.priceInDenars} denars`);
  },
};

const sportsClothing6 = {
  brand: "Reebok",
  clothing: "Training Shorts",
  performanceAndFunction: "Speedwick fabric, durable, inner brief lining",
  styleAndComfort: "Elastic waistband, mid-thigh length",
  priceInDenars: 1750,
  details: {
    material: "Woven Nylon",
    inseam: "5 inches",
    pocketCount: 2,
  },
  print: function () {
    console.log(`Brand: ${this.brand} ${this.clothing}`);
    console.log(`Those training shorts cost: ${this.priceInDenars} denars`);
  },
};
const sportsClothing7 = {
  brand: "Salomon",
  clothing: "Hiking Pants",
  performanceAndFunction:
    "Water-repellent, durable, UV protection, articulated knees",
  styleAndComfort: "Tapered fit, lightweight, freedom of movement",
  priceInDenars: 4500,
  details: {
    material: "Stretch Nylon",
    pockets: "Two zip hand pockets",
    bestFor: ["Trail hiking and climbing"],
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`Those hiking pants cost: ${this.priceInDenars} denars`);
    console.log(`Those hiking pants are made of: ${this.details.material}`);
  },
};

const sportsClothing8 = {
  brand: "Asics",
  clothing: "Athletic Tank Top",
  performanceAndFunction:
    "Actibreeze technology, extremely breathable, fast drying",
  styleAndComfort: "Sleeveless design, soft texture",
  priceInDenars: 1250,
  details: {
    material: "Recycled mesh fabric",
    fit: "Slim fit",
    colorOptions: ["White", "Coral", "Neon Yellow"],
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`This top costs: ${this.priceInDenars} denars`);
    console.log(`We have three colors: ${this.details.colorOptions}`);
  },
};

const sportsClothing9 = {
  brand: "Columbia",
  clothing: "Fleece Jacket",
  performanceAndFunction:
    "Thermal reflective lining, warm, lightweight insulation",
  styleAndComfort: "Full zip, high collar, comfortable layer",
  priceInDenars: 3190,
  details: {
    material: "MTR Filament Fleece",
    zipperType: "Vislon zip",
    season: "Autumn/Winter",
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`This Fleece Jacket costs: ${this.priceInDenars} denars`);
    console.log(`The Fleece Jacket has: ${this.performanceAndFunction}`);
  },
};

const sportsClothing10 = {
  brand: "New Balance",
  clothing: "Socks (3-pack)",
  performanceAndFunction: ["Arch support, cushioning, blister prevention"],
  styleAndComfort: "No-show cut, snug fit",
  priceInDenars: 890,
  details: {
    material: "Synthetic blend with spandex",
    cushionLevel: "Medium",
    sizeRange: ["S, M, L, XL"],
  },
  print: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`Those socks cost: ${this.priceInDenars} denars`);
    console.log(`We have three sizes: ${this.details.sizeRange}`);
  },
};
sportsClothing1.print();
sportsClothing2.print();
sportsClothing3.print();
sportsClothing4.print();
sportsClothing5.print();
sportsClothing6.print();
sportsClothing7.print();
sportsClothing8.print();
sportsClothing9.print();
sportsClothing10.print();

let sportsClothing = [
  sportsClothing1,
  sportsClothing2,
  sportsClothing3,
  sportsClothing4,
  sportsClothing5,
  sportsClothing6,
  sportsClothing7,
  sportsClothing8,
  sportsClothing9,
  sportsClothing10,
];
console.log(sportsClothing[5]);
console.log("-------------------");
// for (let i = 0; i < sportsClothing.length; i++){
//     sportsClothing[i].print();
// }
sportsClothing.forEach((sportsClothing) => sportsClothing.print());

// niza od objekti
const sportsClothes = [
  {
    brand: "Nike",
    clothing: "Leggings",
    performanceAndFunction: "Breathability, stretch and recovery, quick-drying",
    styleAndComfort: "Comfortable",
    priceInDenars: 1999,
    details: "Polyester/Elastane blend",
  },

  {
    brand: "Oysho",
    clothing: "Leggings",
    performanceAndFunction: "Breathability, compressive, warm",
    styleAndComfort: "Comfortlux",
    priceInDenars: 2200,
    details: "Wash with similar colors",
  },

  {
    brand: "Adidas",
    clothing: "Sports Bra",
    performanceAndFunction: "High support, moisture-wicking, adjustable straps",
    styleAndComfort: "Secure fit, soft material",
    priceInDenars: 2590,
    details: "Recycled Polyester Pique",
  },

  {
    brand: "Puma",
    clothing: "Running T-Shirt",
    performanceAndFunction:
      "DryCELL technology, lightweight, reflectivity for safety",

    styleAndComfort: "Loose fit, smooth feel",
    priceInDenars: 1550,
    details: "100% Polyester",
  },

  {
    brand: "Under Armour",
    clothing: "Hoodie",
    performanceAndFunction: "ColdGear technology, traps heat, quick-drying",
    styleAndComfort: "Kangaroo pocket, relaxed fit",
    priceInDenars: 3800,
    details: "Cotton/Fleece blend",
  },

  {
    brand: "Reebok",
    clothing: "Training Shorts",
    performanceAndFunction: "Speedwick fabric, durable, inner brief lining",
    styleAndComfort: "Elastic waistband, mid-thigh length",
    priceInDenars: 1750,
    details: "Woven Nylon",
  },

  {
    brand: "Salomon",
    clothing: "Hiking Pants",
    performanceAndFunction:
      "Water-repellent, durable, UV protection, articulated knees",
    styleAndComfort: "Tapered fit, lightweight, freedom of movement",
    priceInDenars: 4500,
    details: "Stretch Nylon",
  },

  {
    brand: "Asics",
    clothing: "Athletic Tank Top",
    performanceAndFunction:
      "Actibreeze technology, extremely breathable, fast drying",
    styleAndComfort: "Sleeveless design, soft texture",
    priceInDenars: 1250,
    details: "White Coral Neon Yellow",
  },

  {
    brand: "Columbia",
    clothing: "Fleece Jacket",
    performanceAndFunction:
      "Thermal reflective lining, warm, lightweight insulation",
    styleAndComfort: "Full zip, high collar, comfortable layer",
    priceInDenars: 3190,
    details: "Autumn/Winter",
  },

  {
    brand: "New Balance",
    clothing: "Socks (3-pack)",
    performanceAndFunction: "Arch support, cushioning, blister prevention",
    styleAndComfort: "No-show cut, snug fit",
    priceInDenars: 890,
    details: "Synthetic blend with spandex",
  },
];
console.log("-------------------");
sportsClothes.forEach((item) => {
  console.log(`${item.brand} ${item.clothing}`);
});

function classifyByPrice(items) {
  let budgetCount = 0;
  let midRangeCount = 0;
  let premiumCount = 0;

  items.forEach((item) => {
    const price = item.priceInDenars;

    if (price <= 1700) {
      budgetCount++;
    } else if (price > 1700 && price <= 3500) {
      midRangeCount++;
    } else {
      premiumCount++;
    }
  });

  return {
    "Budget (max 1700)": budgetCount,
    "Middle class (1701 - 3500)": midRangeCount,
    "Premium (above 3500)": premiumCount,
  };
}

const priceClassification = classifyByPrice(sportsClothes);

console.log("-------------------");
console.log("Sports clothes by price:");
console.log(priceClassification);
console.log("-------------------");
// reusable
const warmClothes = [];
const warmItems = ["Hoodie", "Fleece Jacket", "Hiking Pants"];
for (const item of sportsClothes) {
  if (warmItems.includes(item.clothing)) {
    warmClothes.push(item);
  }
}
const warmClothesClassification = classifyByPrice(warmClothes);
console.log("Warm clothes by price");
console.log(warmClothesClassification);
