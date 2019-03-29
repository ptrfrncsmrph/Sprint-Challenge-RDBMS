exports.up = knex =>
  knex.schema.createTable("actions", tbl => {
    tbl.increments()
    tbl.string("name", 255).notNullable()
    tbl.string("description", 511).notNullable()
    tbl.string("notes", 511).notNullable()
    tbl.boolean("completed").defaultTo(false)
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })

exports.down = knex => knex.schema.dropTableIfExists("actions")
