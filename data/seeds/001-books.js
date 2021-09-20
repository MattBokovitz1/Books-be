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
      ]);
    });
};
