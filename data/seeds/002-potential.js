exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("potential")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("potential").insert([
        {
          id: 1,
          title: "Philosophy of Mathematics",
          author: "Hilary Putnam",
          date: "2021",
          rating: "10",
          topic: "Mathematics",
        },

        {
          id: 2,
          title: "The Odyssey",
          author: "Homer",
          date: "2021",
          rating: "9",
          topic: "Classics",
        },
        {
          id: 3,
          title: "Language Truth and Logic",
          author: "AJ Ayer",
          date: "2021",
          rating: "7",
          topic: "Philosophy",
        },
      ]);
    });
};
