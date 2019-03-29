exports.seed = knex =>
  knex("projects").insert([
    {
      name: "Learn JavaScript",
      description: "Learning a new programming language",
      notes: "Nothing to note"
    },
    {
      name: "Learn Rust",
      description: "Learning a new programming language",
      notes: 'Typesafe, fast, "simple"?'
    },
    {
      name: "Learn Haskell",
      description: "Learning a new programming language",
      notes:
        'Typesafe, fast, "hard"?, need to decide which will be easier to write a web server in'
    }
  ])
