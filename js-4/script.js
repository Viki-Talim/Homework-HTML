const top5Serii = [
  {
    ime: "Game of Thrones",
    godina: 2011,
    zanr: "Fantasy/Drama",
    rejting: 9.2,
  },
  {
    ime: "Breaking Bad",
    godina: 2008,
    zanr: "Crime/Drama/Triller",
    rejting: 9.5,
  },
  {
    ime: "Stranger Things",
    godina: 2016,
    zanr: "Sci-Fi/Horror",
    rejting: 8.7,
  },
  {
    ime: "The Queen's Gambit",
    godina: 2020,
    zanr: "Drama",
    rejting: 8.5,
  },
  {
    ime: "The Office (US)",
    godina: 2005,
    zanr: "Comedy",
    rejting: 9.0,
  },
];
top5Serii.forEach((serija) => {
  console.log(serija);
});
console.log("--------------------");

const serii = top5Serii.filter((serija) => serija.rejting > 9);
console.log(serii);
console.log("--------------------");
const upperCaseSerii = top5Serii.map((serija) => serija.ime.toUpperCase());
console.log(upperCaseSerii);
console.log("--------------------");

const libraryBook = {
  title: "The Four Winds",
  author: "Kristin Hannah",
  isbn: "978-608-234-567-8",
  publicationYear: 2021,
  isAvailable: true,
  publisher: {
    name: "Macmillan Publishers",
    location: "New York",
    contact: "press.inquiries@macmillan.com",
  },
  reviews: [
    {
      user: "AnnaM",
      rating: 5,
      comment: "Excellent story, I couldn't put it down!",
    },
    {
      user: "Elena88",
      rating: 3,
      comment:
        "The main issue was the characters, they weren't developed enough for me to root for them. Moderately satisfied.",
    },
    {
      user: "George_90",
      rating: 4,
      comment: "A bit slow at the start, but a great twist at the end.",
    },
    {
      user: "VictoriaT",
      rating: 5,
      comment: "Excellent story!",
    },
    {
      user: "PeterK",
      rating: 3,
      comment:
        "The story has potential, but the pacing is uneven. Some chapters felt too drawn out.",
    },

    {
      user: "Reader2024",
      rating: 3.5,
      comment:
        "Interesting world-building, but the ending was too rushed and left too many questions unanswered.",
    },
  ],

  genres: ["Historical Fiction, Domestic Fiction, Southern Fiction"],
};

const poorRatedComments = libraryBook.reviews
  .filter((review) => {
    return review.rating < 4;
  })
  .map((review) => {
    return `${review.user} ${review.comment}`;
  });
console.log(poorRatedComments);
