exports.up = knex =>
  knex.schema.createTable("projects", tbl => {
    tbl.increments()
    tbl.string("name", 255).notNullable()
    tbl.string("description", 511).notNullable()
    tbl.string("notes", 511).notNullable()
    tbl.boolean("completed").defaultTo(false)
  })

exports.down = knex => knex.schema.dropTableIfExists("projects")
