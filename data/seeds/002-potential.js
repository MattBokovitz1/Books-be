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
          date: "2022",
          rating: "10",
          topic: "Mathematics",
        },

        {
          id: 2,
          title: "The Bible",
          author: "-",
          date: "2022",
          rating: "10",
          topic: "Religion",
        },
        {
          id: 3,
          title: "Language Truth and Logic",
          author: "AJ Ayer",
          date: "2022",
          rating: "7",
          topic: "Philosophy",
        },
        {
          id: 4,
          title: "A History of the English-Speaking Peoples Vol 3&4",
          author: "Winston Churchill",
          date: "2022",
          rating: "10",
          topic: "History",
        },
        {
          id: 5,
          title: "Lifespan",
          author: "David Sinclair",
          date: "2022",
          rating: "7",
          topic: "Biology and Health",
        },
        {
          id: 6,
          title: "Decadent Society",
          author: "Ross Douthat",
          date: "2022",
          rating: "8",
          topic: "Politics",
        },
      ]);
    });
};
