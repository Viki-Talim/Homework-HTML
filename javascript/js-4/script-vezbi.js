const knigi = [
  {
    naslov: "1984",
    avtor: "George Orwell",
    godina: 1949,
    zhanr: "Dystopia",
    prochitana: false,
  },
  {
    naslov: "The Little Prince",
    avtor: "Antoine de Saint-Exupéry",
    godina: 1943,
    zhanr: "Children's Literature",
    prochitana: true,
  },
  {
    naslov: "Crime and Punishment",
    avtor: "Fyodor Dostoevsky",
    godina: 1866,
    zhanr: "Philosophical Novel",
    prochitana: false,
  },
  {
    naslov: "The Great Gatsby",
    avtor: "F. Scott Fitzgerald",
    godina: 1925,
    zhanr: "Modernism",
    prochitana: true,
  },
  {
    naslov: "To Kill a Mockingbird",
    avtor: "Harper Lee",
    godina: 1960,
    zhanr: "Southern Gothic",
    prochitana: false,
  },
  {
    naslov: "The Hobbit",
    avtor: "J.R.R. Tolkien",
    godina: 1937,
    zhanr: "Fantasy",
    prochitana: true,
  },
];
const prochitaniKnigi = knigi.filter((kniga) => kniga.prochitana === true);
console.log(prochitaniKnigi);
console.log("------------------------------------");

const books = knigi.map((kniga) => kniga.naslov);
console.log(books);
console.log("------------------------------------");

const pronajdiKniga = knigi.find((kniga) => kniga.godina < 1950);
console.log(pronajdiKniga);
console.log("----------------------------------");
const fantasyBook = knigi.some((kniga) => kniga.zhanr === "Fantasy");
console.log(fantasyBook);
console.log("---------------------------------");
const prochitanaTrue = knigi.every(kniga => kniga.prochitana === true);
console.log(prochitanaTrue);
console.log("------------------------------------");
const zbirNaGodini = knigi.reduce((acc, kniga) => acc + kniga.godina, 0);
console.log(zbirNaGodini);
console.log("-----------------");
const zhanrUpperCase = knigi.map((kniga) => kniga.zhanr.toUpperCase());
console.log(zhanrUpperCase);
console.log("------------------");
const sortiraniKnigi = knigi.sort((a, b) => a.godina - b.godina);
console.log(sortiraniKnigi);
console.log("------------------");
const avtoriIknigi = knigi.forEach((kniga) =>
  console.log(`${kniga.naslov} od ${kniga.avtor}`)
);
console.log("------------------");
const proverkaZaAvtor = knigi.some(kniga => kniga.avtor === "Antoine de Saint-Exupéry");
console.log(proverkaZaAvtor);
