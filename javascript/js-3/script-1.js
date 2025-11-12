const person1 = {
  name: "Alexander",
  goal: "Weight Maintenance",
  basalMetabolism: 2200,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 2150,
    protein_g: 150,
    carbohydrates_g: 250,
    fats_g: 70,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`His goal is to: ${this.goal}`);
  },
};

const person2 = {
  name: "Marija",
  goal: "Weight Loss",
  basalMetabolism: 1800,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 1650,
    protein_g: 110,
    carbohydrates_g: 180,
    fats_g: 60,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Her goal is to: ${this.goal}`);
  },
};
const person3 = {
  name: "Nikola",
  goal: "Muscle Gain",
  basalMetabolism: 2800,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 3100,
    protein_g: 220,
    carbohydrates_g: 350,
    fats_g: 100,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`His goal is to: ${this.goal}`);
  },
};
const person4 = {
  name: "Elena",
  goal: "Weight Maintenance",
  basalMetabolism: 1900,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 1950,
    protein_g: 130,
    carbohydrates_g: 220,
    fats_g: 65,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Her goal is to: ${this.goal}`);
  },
};
const person5 = {
  name: "Zoran",
  goal: "Weight Loss",
  basalMetabolism: 2100,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 1850,
    protein_g: 140,
    carbohydrates_g: 190,
    fats_g: 55,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`His goal is to: ${this.goal}`);
  },
};
const person6 = {
  name: "Ivana",
  goal: "Muscle Gain",
  basalMetabolism: 2000,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 2400,
    protein_g: 150,
    carbohydrates_g: 300,
    fats_g: 80,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Her goal is to: ${this.goal}`);
  },
};
const person7 = {
  name: "Petar",
  goal: "Weight Maintenance",
  basalMetabolism: 2300,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 2250,
    protein_g: 160,
    carbohydrates_g: 260,
    fats_g: 70,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`His goal is to: ${this.goal}`);
  },
};
const person8 = {
  name: "Ana",
  goal: "Weight Loss",
  basalMetabolism: 1750,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 1600,
    protein_g: 100,
    carbohydrates_g: 170,
    fats_g: 50,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Her goal is to: ${this.goal}`);
  },
};
const person9 = {
  name: "Dimitar",
  goal: "Muscle Gain",
  basalMetabolism: 2600,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 2900,
    protein_g: 200,
    carbohydrates_g: 320,
    fats_g: 90,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`His goal is to: ${this.goal}`);
  },
};
const person10 = {
  name: "Simona",
  goal: "Weight Maintenance",
  basalMetabolism: 1850,
  dailyIntake: {
    date: "2025-11-10",
    totalCalories: 1800,
    protein_g: 120,
    carbohydrates_g: 200,
    fats_g: 60,
  },
  print: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Her goal is to: ${this.goal}`);
  },
};
person1.print();
person2.print();
person3.print();
person4.print();
person5.print();
person6.print();
person7.print();
person8.print();
person9.print();
person10.print();
console.log("-------------");

let person = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10,
];
console.log(person[6]);
console.log("-------------");
for (let i = 0; i < person.length; i++) {
  person[i].print();
}
// niza od objekti
const nutritionTracker = [
  {
    name: "Alexander",
    goal: "Weight Maintenance",
    basalMetabolism: 2200,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 2150,
      protein_g: 150,
      carbohydrates_g: 250,
      fats_g: 70,
    },
  },
  {
    name: "Marija",
    goal: "Weight Loss",
    basalMetabolism: 1800,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 1650,
      protein_g: 110,
      carbohydrates_g: 180,
      fats_g: 60,
    },
  },
  {
    name: "Nikola",
    goal: "Muscle Gain",
    basalMetabolism: 2800,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 3100,
      protein_g: 220,
      carbohydrates_g: 350,
      fats_g: 100,
    },
  },
  {
    name: "Elena",
    goal: "Weight Maintenance",
    basalMetabolism: 1900,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 1950,
      protein_g: 130,
      carbohydrates_g: 220,
      fats_g: 65,
    },
  },
  {
    name: "Zoran",
    goal: "Weight Loss",
    basalMetabolism: 2100,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 1850,
      protein_g: 140,
      carbohydrates_g: 190,
      fats_g: 55,
    },
  },
  {
    name: "Ivana",
    goal: "Muscle Gain",
    basalMetabolism: 2000,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 2400,
      protein_g: 150,
      carbohydrates_g: 300,
      fats_g: 80,
    },
  },
  {
    name: "Petar",
    goal: "Weight Maintenance",
    basalMetabolism: 2300,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 2250,
      protein_g: 160,
      carbohydrates_g: 260,
      fats_g: 70,
    },
  },
  {
    name: "Ana",
    goal: "Weight Loss",
    basalMetabolism: 1750,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 1600,
      protein_g: 100,
      carbohydrates_g: 170,
      fats_g: 50,
    },
  },
  {
    name: "Dimitar",
    goal: "Muscle Gain",
    basalMetabolism: 2600,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 2900,
      protein_g: 200,
      carbohydrates_g: 320,
      fats_g: 90,
    },
  },
  {
    name: "Simona",
    goal: "Weight Maintenance",
    basalMetabolism: 1950,
    dailyIntake: {
      date: "2025-11-10",
      totalCalories: 1900,
      protein_g: 120,
      carbohydrates_g: 200,
      fats_g: 60,
    },
  },
];
console.log("-----------------");
nutritionTracker.forEach((item) => {
  console.log(
    `${item.name} has ${item.dailyIntake.totalCalories} total calories intake.`
  );
});
console.log("-----------------");

function classifyByCalories(caloriesIntake) {
  let calories;
  if (caloriesIntake >= 0 && caloriesIntake < 1850) {
    calories = "Your goal is to: loose weight";
  } else if (caloriesIntake >= 1851 && caloriesIntake <= 2300) {
    calories = "Your goal is to gain weight";
  } else if (caloriesIntake > 2301 && caloriesIntake <= 3100) {
    calories = "Your goal is to gain muscle";
  } else {
    return null;
  }
  return calories;
}

console.log(classifyByCalories(1500));
console.log(classifyByCalories(3000));
console.log(classifyByCalories(2200));
