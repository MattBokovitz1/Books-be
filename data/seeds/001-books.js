exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {
          id: 1,
          title: "Aion",
          author: "Carl Jung",
          date: "2021",
          rating: "10",
          topic: "Psychology",
        },

        {
          id: 2,
          title: "Transcend",
          author: "Scott Barry Kaufman",
          date: "2021",
          rating: "7",
          topic: "Psychology",
        },
        {
          id: 3,
          title: "JavaScript The Definitive Guide",
          author: "David Flanagan",
          date: "2021",
          rating: "7",
          topic: "Language Textbook",
        },
        {
          id: 4,
          title: "Psychology and Alchemy",
          author: "Carl Jung",
          date: "2021",
          rating: "10",
          topic: "Psychology",
        },

        {
          id: 5,
          title: "The Outline of History",
          author: "H.G. Wells",
          date: "2020",
          rating: "7",
          topic: "History",
        },
        {
          id: 6,
          title: "All The Light We Cannot See",
          author: "Anthony Doerr",
          date: "2020",
          rating: "9",
          topic: "Historical Fiction",
        },
        {
          id: 7,
          title: "The Iliad",
          author: "Homer",
          date: "2021",
          rating: "7",
          topic: "Classics",
        },
        {
          id: 8,
          title: "Toward a psychology of being",
          author: "Abraham Maslow",
          date: "2020",
          rating: "8",
          topic: "Psychology",
        },
        {
          id: 9,
          title:
            "Emotional Awareness - conversation between Dalai Lama and Paul Ekman",
          author: "Paul Ekman",
          date: "2021",
          rating: "7",
          topic: "Psychology",
        },
        {
          id: 10,
          title: "Benjamin Franklin",
          author: "Walter Isaacson",
          date: "2020",
          rating: "8",
          topic: "History",
        },
        {
          id: 11,
          title: "Modern Man In Search Of A Soul",
          author: "Carl Jung",
          date: "2020",
          rating: "7",
          topic: "Psychology",
        },
        {
          id: 12,
          title: "The Undiscovered Self",
          author: "Carl Jung",
          date: "2020",
          rating: "10",
          topic: "Psychology",
        },
        {
          id: 13,
          title: "Man's Search For Meaning",
          author: "Viktor Frankl",
          date: "2021",
          rating: "8",
          topic: "Psychology",
        },

        {
          id: 14,
          title: "Coming To Our Senses",
          author: "Jon Kabat-Zinn",
          date: "2021",
          rating: "8",
          topic: "Psychology",
        },
        {
          id: 15,
          title: "Radical Compassion",
          author: "Tara Brach",
          date: "2021",
          rating: "7",
          topic: "Psychology",
        },
      ]);
    });
};
