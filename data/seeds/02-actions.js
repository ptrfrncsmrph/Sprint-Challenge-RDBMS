exports.seed = knex =>
  knex("actions").insert([
    {
      name: "Write JSVerify property tests",
      description: "It's a testing framework",
      notes: "Kinda like QuickCheck",
      project_id: 1
    },
    {
      name: "Complete Exercism problem set",
      description: "Aim for three a day",
      notes: "Low priority",
      project_id: 1
    },
    {
      name: "Write State monad in JavaScript",
      description: "Follow along with the Egghead tutorial",
      notes:
        "This will be tricky but I think worthwhile to see things in a different light",
      project_id: 1
    },
    {
      name: "Write a web app in Rocket",
      description: "",
      notes: "",
      project_id: 2
    },
    {
      name: "Read the Rust book",
      description: "Recommended as first step",
      notes: "",
      project_id: 2
    },
    {
      name: "Finish Haskell Book",
      description: "A few more chapters",
      notes: "",
      project_id: 3
    },
    {
      name: "Work through Yesod Book",
      description: "Build a web app in Haskell!",
      notes: "",
      project_id: 3
    }
  ])
